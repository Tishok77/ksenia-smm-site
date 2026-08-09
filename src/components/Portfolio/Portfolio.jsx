import { portfolioItems } from '../../data/portfolio'
import MediaPlaceholder from '../common/MediaPlaceholder'
import { useReveal } from '../../hooks/useReveal'
import './Portfolio.css'

const TONES = ['sage', 'cream', 'deep', 'ink']

export default function Portfolio() {
  const [headingRef, headingVisible] = useReveal()

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <div ref={headingRef} className={`reveal ${headingVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Работы</span>
          <h2 className="section-heading">Портфолио</h2>
          <p className="portfolio__intro">
            Reels, Stories, карусели и визуалы —{' '}
            <span className="editorial-accent-inline">люблю создавать со вкусом</span>
          </p>
        </div>
      </div>

      <div className="portfolio__gallery">
        {portfolioItems.map((item, index) => (
          <PortfolioTile item={item} tone={TONES[index % TONES.length]} key={item.id} />
        ))}
      </div>
    </section>
  )
}

function PortfolioTile({ item, tone }) {
  const [ref, isVisible] = useReveal({ threshold: 0.05 })

  return (
    <div
      ref={ref}
      className={`portfolio__item portfolio__item--${item.size} ${item.accent ? 'is-accent' : ''} ${
        isVisible ? 'is-visible' : ''
      }`}
      style={{ '--rotate': `${item.rotate}deg` }}
    >
      <MediaPlaceholder
        kind={item.type}
        tone={item.accent ? 'deep' : tone}
        src={item.src}
        poster={item.poster}
        label={item.kind}
        caption={item.expectedFile.split('/').pop()}
        alt={`${item.kind} — портфолио Ксении`}
        className="portfolio__media"
      />
    </div>
  )
}
