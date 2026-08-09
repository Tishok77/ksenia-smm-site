import { useEffect } from 'react'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

// Traps keyboard focus inside `containerRef` while `active` is true, closes
// on Escape, and restores focus to whatever triggered it on close. Used by
// ContactModal and the mobile fullscreen menu.
export function useFocusTrap(active, containerRef, onClose) {
  useEffect(() => {
    if (!active) return undefined

    const previouslyFocused = document.activeElement
    const container = containerRef.current

    const focusFirst = () => {
      const focusable = container?.querySelectorAll(FOCUSABLE_SELECTOR)
      ;(focusable?.[0] ?? container)?.focus()
    }
    focusFirst()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        onClose?.()
        return
      }

      if (event.key !== 'Tab' || !container) return

      const focusable = Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
        (el) => el.offsetParent !== null,
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      if (previouslyFocused instanceof HTMLElement) {
        previouslyFocused.focus()
      }
    }
  }, [active, containerRef, onClose])
}
