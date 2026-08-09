import { useEffect } from 'react'

// Locks page scroll while `active` is true (used by the mobile menu and the
// contact modal) without causing a layout shift from the disappearing
// scrollbar.
export function useLockBodyScroll(active) {
  useEffect(() => {
    if (!active) return undefined

    const { body } = document
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    const previousOverflow = body.style.overflow
    const previousPaddingRight = body.style.paddingRight

    body.style.overflow = 'hidden'
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`
    }

    return () => {
      body.style.overflow = previousOverflow
      body.style.paddingRight = previousPaddingRight
    }
  }, [active])
}
