import { useEffect, useRef, useState } from 'react'
import { nav } from '../../data/site'
import { useContactModal } from '../../context/useContactModal'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { scrollToId } from '../../utils/scrollTo'
import './Header.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { open: openContactModal } = useContactModal()
  const menuRef = useRef(null)
  const menuButtonRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined
    const onKeydown = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKeydown)
    return () => window.removeEventListener('keydown', onKeydown)
  }, [isMenuOpen])

  useLockBodyScroll(isMenuOpen)
  useFocusTrap(isMenuOpen, menuRef, () => setIsMenuOpen(false))

  const handleNavClick = (event, href) => {
    event.preventDefault()
    setIsMenuOpen(false)
    scrollToId(href.slice(1))
  }

  const closeMenuAndReturnFocus = () => {
    setIsMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__bar container">
        <a
          href="#top"
          className="header__logo"
          onClick={(event) => {
            event.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Ксения
        </a>

        <nav className="header__nav" aria-label="Основная навигация">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(event) => handleNavClick(event, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button type="button" className="header__cta btn btn-primary" onClick={openContactModal}>
          Обсудить проект <span aria-hidden="true">→</span>
        </button>

        <button
          type="button"
          ref={menuButtonRef}
          className="header__menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="visually-hidden">Открыть меню</span>
          <span className="header__menu-icon" aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
        inert={!isMenuOpen}
      >
        <div className="mobile-menu__top">
          <span className="header__logo">Ксения</span>
          <button type="button" className="mobile-menu__close" onClick={closeMenuAndReturnFocus}>
            <span className="visually-hidden">Закрыть меню</span>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <nav aria-label="Мобильная навигация">
          <ul className="mobile-menu__nav">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(event) => handleNavClick(event, item.href)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="btn btn-primary mobile-menu__cta"
          onClick={() => {
            setIsMenuOpen(false)
            openContactModal()
          }}
        >
          Обсудить проект <span aria-hidden="true">→</span>
        </button>

        <p className="mobile-menu__tagline italic-accent">Story. Mood. Magic.</p>
      </div>
    </header>
  )
}
