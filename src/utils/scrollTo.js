// Smooth-scrolls to a section, offsetting for the fixed header height so the
// heading isn't hidden underneath it.
export function scrollToId(id) {
  const target = document.getElementById(id)
  if (!target) return

  const header = document.querySelector('.header')
  const offset = (header?.offsetHeight ?? 0) + 12
  const top = target.getBoundingClientRect().top + window.scrollY - offset
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
}
