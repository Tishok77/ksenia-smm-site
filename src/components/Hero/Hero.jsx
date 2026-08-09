import { useEffect, useState } from 'react'
import MediaPlaceholder from '../common/MediaPlaceholder'
import { useContactModal } from '../../context/useContactModal'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import './Hero.css'

const STAGGER_MS = [0, 160, 320, 480, 620, 620]

export default function Hero() {
  const { open: openContactModal } = useContactModal()
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isIn, setIsIn] = useState(prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) return
    const frame = requestAnimationFrame(() => setIsIn(true))
    return () => cancelAnimationFrame(frame)
  }, [prefersReducedMotion])

  const delay = (index) => ({ transitionDelay: isIn ? `${STAGGER_MS[index]}ms` : '0ms' })

  return (
    <section id="hero" className="hero section">
      <div className="hero__inner container">
        <h1
          className={`hero__greeting hero__reveal ${isIn ? 'is-in' : ''}`}
          style={delay(0)}
        >
          Привет, я Ксения
        </h1>

        <div className="hero__row">
          <div className="hero__headline">
            <p
              className={`hero__create editorial-accent-large hero__reveal ${isIn ? 'is-in' : ''}`}
              style={delay(1)}
            >
              создаю
            </p>
            <p className={`hero__product hero__reveal ${isIn ? 'is-in' : ''}`} style={delay(2)}>
              Контент + SMM,
              <br />
              которые приводят клиентов,
            </p>
          </div>

          <div className={`hero__photo-wrap hero__reveal ${isIn ? 'is-in' : ''}`} style={delay(3)}>
            <MediaPlaceholder
              kind="image"
              tone="sage"
              eager
              alt="Ксения"
              label="Ксения"
              caption="IMG_4106.jpg"
              className="hero__photo"
            />
            <p
              className={`hero__tail editorial-accent-medium hero__reveal ${isIn ? 'is-in' : ''}`}
              style={delay(4)}
            >
              а не просто лайки
            </p>
          </div>
        </div>

        <div className={`hero__meta hero__reveal ${isIn ? 'is-in' : ''}`} style={delay(5)}>
          <p className="hero__tags">Стратегия · Контент · Reels · Ведение соцсетей</p>
          <button type="button" className="btn btn-primary hero__cta" onClick={openContactModal}>
            Обсудить проект <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div className="hero__backdrop" aria-hidden="true" />
    </section>
  )
}
