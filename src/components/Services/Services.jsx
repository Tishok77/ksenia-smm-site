import { useState } from 'react'
import { services } from '../../data/services'
import { useReveal } from '../../hooks/useReveal'
import './Services.css'

export default function Services() {
  const [openId, setOpenId] = useState(null)
  const [headingRef, headingVisible] = useReveal()
  const [listRef, listVisible] = useReveal()

  const toggle = (id) => setOpenId((current) => (current === id ? null : id))

  return (
    <section id="services" className="services section">
      <div className="container">
        <div ref={headingRef} className={`reveal ${headingVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Что я делаю</span>
          <h2 className="section-heading">Услуги</h2>
        </div>

        <ul
          ref={listRef}
          className={`services__list reveal ${listVisible ? 'is-visible' : ''}`}
        >
          {services.map((service, index) => {
            const isOpen = openId === service.id
            const panelId = `service-panel-${service.id}`
            const buttonId = `service-button-${service.id}`

            return (
              <li key={service.id} className={`services__item ${isOpen ? 'is-open' : ''}`}>
                <button
                  type="button"
                  id={buttonId}
                  className="services__trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(service.id)}
                >
                  <span className="services__index">{String(index + 1).padStart(2, '0')}</span>
                  <span className="services__title">{service.title}</span>
                  <span className="services__icon" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div className="services__panel-wrap">
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    aria-hidden={!isOpen}
                    className="services__panel"
                  >
                    <p>{service.description}</p>
                    {service.price ? <p className="services__price">{service.price}</p> : null}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
