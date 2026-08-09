import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { contacts } from '../../data/site'
import { useContactModal } from '../../context/useContactModal'
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import './ContactModal.css'

export default function ContactModal() {
  const { isOpen, close } = useContactModal()
  const dialogRef = useRef(null)

  useLockBodyScroll(isOpen)
  useFocusTrap(isOpen, dialogRef, close)

  if (!isOpen) return null

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) close()
  }

  return createPortal(
    <div className="contact-modal__overlay" onClick={handleOverlayClick}>
      <div
        ref={dialogRef}
        className="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button type="button" className="contact-modal__close" onClick={close}>
          <span className="visually-hidden">Закрыть окно</span>
          <span aria-hidden="true">✕</span>
        </button>

        <h2 id="contact-modal-title" className="contact-modal__title">
          Давайте знакомиться
        </h2>
        <p className="contact-modal__subtitle editorial-accent-medium">выберите, где вам удобнее написать</p>

        <div className="contact-modal__links">
          <a
            href={contacts.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-modal__link"
          >
            Instagram <span aria-hidden="true">↗</span>
          </a>
          <a href={`mailto:${contacts.email}`} className="contact-modal__link">
            E-mail <span aria-hidden="true">↗</span>
          </a>
        </div>

        <p className="contact-modal__note">Отвечу и договоримся о бесплатной консультации.</p>
      </div>
    </div>,
    document.body,
  )
}
