'use client'

type MetaEventOptions = {
  email?: string
  phone?: string
  customData?: Record<string, unknown>
}

export function useMetaEvent() {
  const track = async (
    eventName: string,
    options: MetaEventOptions = {}
  ): Promise<void> => {
    const eventId = crypto.randomUUID()

    // 1. Pixel del browser (deduplicación via eventID)
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      ;(window as any).fbq('track', eventName, options.customData ?? {}, { eventID: eventId })
    }

    // 2. CAPI server-side
    try {
      await fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          eventName,
          eventId,
          email: options.email,
          phone: options.phone,
          customData: options.customData,
          userAgent: navigator.userAgent,
          pageUrl: window.location.href,
        }),
      })
    } catch (err) {
      console.error('[Meta CAPI] Error al enviar evento:', err)
    }
  }

  return { track }
}
