import { cases } from '../../data/cases'
import { useReveal } from '../../hooks/useReveal'
import StatNumber from './StatNumber'
import './Cases.css'

const [caseOne, caseTwo] = cases

function CaseOne() {
  const [ref, isVisible] = useReveal()

  return (
    <article ref={ref} className={`case-card case-card--one reveal ${isVisible ? 'is-visible' : ''}`}>
      <div className="case-card__head">
        <span className="case-card__number">{caseOne.number}</span>
        <div>
          <h3 className="case-card__niche">{caseOne.niche}</h3>
          <p className="case-card__duration">{caseOne.duration}</p>
        </div>
      </div>

      <ul className="case-card__tags">
        {caseOne.work.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <StatNumber
        value={caseOne.stat.value}
        prefix={caseOne.stat.prefix}
        suffix={caseOne.stat.suffix}
        label={caseOne.stat.label}
        className="case-card__hero-stat"
      />
    </article>
  )
}

function CaseTwo() {
  const [ref, isVisible] = useReveal()

  return (
    <article ref={ref} className={`case-card case-card--two reveal ${isVisible ? 'is-visible' : ''}`}>
      <div className="case-card__head">
        <span className="case-card__number">{caseTwo.number}</span>
        <div>
          <h3 className="case-card__niche">{caseTwo.niche}</h3>
          <p className="case-card__duration">{caseTwo.duration}</p>
        </div>
      </div>

      <div className="case-card__stat-grid">
        {caseTwo.stats.map((stat) => (
          <StatNumber
            key={stat.label}
            value={stat.value}
            decimals={stat.decimals}
            prefix={stat.prefix}
            suffix={stat.suffix}
            label={stat.label}
          />
        ))}
      </div>
    </article>
  )
}

export default function Cases() {
  const [headingRef, headingVisible] = useReveal()

  return (
    <section id="cases" className="cases section">
      <div className="container">
        <div ref={headingRef} className={`reveal ${headingVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Результаты</span>
          <h2 className="section-heading">Кейсы</h2>
        </div>

        <div className="cases__list">
          <CaseOne />
          <CaseTwo />
        </div>
      </div>
    </section>
  )
}
