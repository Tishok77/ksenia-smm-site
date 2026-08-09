import { googleFormUrl } from '../../data/site'
import { useReveal } from '../../hooks/useReveal'
import './ConsultationCTA.css'

export default function ConsultationCTA() {
  const [ref, isVisible] = useReveal()
  const hasFormUrl = Boolean(googleFormUrl)

  return (
    <section id="consultation" className="consultation section">
      <div ref={ref} className={`container consultation__inner reveal ${isVisible ? 'is-visible' : ''}`}>
        <h2 className="consultation__heading">Разберём ваши соцсети?</h2>
        <p className="consultation__subheading editorial-accent-medium">первая консультация — бесплатно</p>
        <p className="consultation__text">
          Посмотрю ваш аккаунт, разберу задачи бизнеса и дам рекомендации по контенту и продвижению
        </p>

        {hasFormUrl ? (
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary consultation__cta"
          >
            <span className="btn__label">Получить бесплатную консультацию</span>
            <span aria-hidden="true">→</span>
          </a>
        ) : (
          <>
            <button type="button" className="btn btn-primary consultation__cta" aria-disabled="true">
              <span className="btn__label">Получить бесплатную консультацию</span>
              <span aria-hidden="true">→</span>
            </button>
            <p className="consultation__note">
              Ссылка на форму записи появится здесь совсем скоро — см.{' '}
              <code>googleFormUrl</code> в <code>src/data/site.js</code>.
            </p>
          </>
        )}
      </div>
    </section>
  )
}
