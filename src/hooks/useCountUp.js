import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

// Russian locale uses a comma as the decimal separator (e.g. "33,3K").
function formatNumber(num, decimals, prefix, suffix) {
  return `${prefix}${num.toFixed(decimals).replace('.', ',')}${suffix}`
}

// Animates a number from 0 to `value` once its element scrolls into view.
// Returns [ref, formattedString].
export function useCountUp(value, { decimals = 0, prefix = '', suffix = '', duration = 1400 } = {}) {
  const ref = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [display, setDisplay] = useState(prefersReducedMotion ? value : 0)

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(value)
      return undefined
    }

    const node = ref.current
    if (!node) return undefined

    let frame
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(node)

        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = easeOutExpo(progress)
          setDisplay(value * eased)
          if (progress < 1) {
            frame = requestAnimationFrame(tick)
          } else {
            setDisplay(value)
          }
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [value, duration, prefersReducedMotion])

  return [ref, formatNumber(display, decimals, prefix, suffix)]
}
