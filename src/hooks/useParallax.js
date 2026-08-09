import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

// Lightweight scroll-linked parallax: offsets an element vertically by
// `speed` × its distance from viewport center, only while it's on screen and
// only when the user hasn't asked for reduced motion. `speed` is small
// (roughly -0.2…0.2) — this is a subtle drift, not a heavy parallax rig.
export function useParallax(speed = 0.12) {
  const ref = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (prefersReducedMotion) return undefined
    const node = ref.current
    if (!node) return undefined

    let ticking = false
    let inView = false

    const update = () => {
      ticking = false
      if (!inView) return
      const rect = node.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const distance = rect.top + rect.height / 2 - viewportCenter
      setOffset(distance * speed * -1)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
        if (inView) onScroll()
      },
      { rootMargin: '20% 0px 20% 0px' },
    )
    observer.observe(node)

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [speed, prefersReducedMotion])

  // Exposed as a CSS custom property (not `transform` directly) so callers
  // can combine it with their own static transform, e.g.:
  //   transform: translateY(var(--parallax-y, 0px)) rotate(-3deg);
  const style = prefersReducedMotion ? undefined : { '--parallax-y': `${offset.toFixed(1)}px` }

  return [ref, style]
}
