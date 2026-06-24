import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

const PIXEL_ID = process.env.META_PIXEL_ID!
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN!

function hash(value: string): string {
  return crypto.createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { eventName, eventId, email, phone, userAgent, pageUrl, customData } = body

    // Obtener IP del request (funciona en Vercel y otros proxies)
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1'

    const userData: Record<string, string> = {
      client_ip_address: ip,
      client_user_agent: userAgent || '',
    }

    if (email) userData.em = hash(email)
    if (phone) userData.ph = hash(phone)

    const eventPayload: Record<string, unknown> = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      event_source_url: pageUrl,
      action_source: 'website',
      user_data: userData,
    }

    if (customData) eventPayload.custom_data = customData

    const response = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: [eventPayload] }),
      }
    )

    const result = await response.json()

    if (!response.ok) {
      console.error('[Meta CAPI] Error:', result)
      return NextResponse.json({ error: result }, { status: response.status })
    }

    return NextResponse.json({ ok: true, events_received: result.events_received })
  } catch (err) {
    console.error('[Meta CAPI] Excepción:', err)
    return NextResponse.json({ error: 'internal_error' }, { status: 500 })
  }
}
