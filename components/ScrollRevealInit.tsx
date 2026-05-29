'use client'

import { useEffect } from 'react'

export default function ScrollRevealInit() {
  useEffect(() => {
    // 1. Standard .reveal elements (fade-in on enter)
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => revealObserver.observe(el))

    // 2. Fallback for .scroll-reveal elements (for browsers that do not support native CSS scroll-driven animations)
    let scrollRevealObserver: IntersectionObserver | null = null
    const supportsScrollTimeline =
      typeof window !== 'undefined' &&
      window.CSS &&
      window.CSS.supports &&
      window.CSS.supports('(animation-timeline: view()) and (animation-range: entry)')

    if (!supportsScrollTimeline) {
      scrollRevealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement
              el.style.opacity = '1'
              el.style.transform = 'translateY(0) scale(1)'
              el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }
          })
        },
        { threshold: 0.05, rootMargin: '0px 0px -80px 0px' }
      )

      const scrollRevealElements = document.querySelectorAll('.scroll-reveal')
      scrollRevealElements.forEach((el) => {
        const htmlEl = el as HTMLElement
        // Set initial style for JS fallback animation
        htmlEl.style.opacity = '0'
        htmlEl.style.transform = 'translateY(30px) scale(0.97)'
        scrollRevealObserver?.observe(el)
      })
    }

    return () => {
      revealObserver.disconnect()
      if (scrollRevealObserver) {
        scrollRevealObserver.disconnect()
      }
    }
  }, [])

  return null
}
