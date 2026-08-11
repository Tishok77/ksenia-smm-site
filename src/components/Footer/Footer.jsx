import { contacts } from '../../data/site'
import { useContactModal } from '../../context/useContactModal'
import './Footer.css'

export default function Footer() {
  const { open: openContactModal } = useContactModal()
  const year = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <h2 className="footer__headline">
          Давайте создадим
          <br />
          то, что
          <br />
          <span className="editorial-accent-inline">запомнят</span>
        </h2>

        <div className="footer__row">
          <div className="footer__contacts">
            <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
          </div>

          <button type="button" className="btn btn-outline footer__cta" onClick={openContactModal}>
            Обсудить проект <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="footer__bottom">
          <span className="footer__logo">Ксения</span>
          <span className="footer__copy">© {year}. Все права защищены.</span>
        </div>
      </div>
    </footer>
  )
}
