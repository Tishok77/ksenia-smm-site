import MediaPlaceholder from '../common/MediaPlaceholder'
import { useReveal } from '../../hooks/useReveal'
import { useParallax } from '../../hooks/useParallax'
import aboutMainPhoto from '../../assets/images/about/IMG_3056.jpg'
import aboutSecondaryPhoto from '../../assets/images/about/IMG_4106.jpg'
import './About.css'

export default function About() {
  const [headingRef, headingVisible] = useReveal()
  const [textRef, textVisible] = useReveal()
  const [photosRef, photosVisible] = useReveal()
  const [lifestyleRef, lifestyleVisible] = useReveal()
  const [parallaxOneRef, parallaxOneStyle] = useParallax(0.08)
  const [parallaxTwoRef, parallaxTwoStyle] = useParallax(-0.14)

  return (
    <section id="about" className="about section">
      <div className="container about__inner">
        <div ref={headingRef} className={`reveal ${headingVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Мой подход</span>
          <h2 className="section-heading about__heading">Обо мне</h2>
        </div>

        <div className="about__content">
          <div ref={textRef} className={`about__text reveal ${textVisible ? 'is-visible' : ''}`}>
            <p>
              SMM — <span className="editorial-accent-inline">не контент ради контента</span>.
            </p>
            <p>
              Я создаю коммуникацию, в которой бренд не просто появляется в ленте — его замечают,
              запоминают и выбирают.
            </p>
            <p>
              Стратегия, визуал, Reels, Stories и тексты работают вместе: передают характер бренда,
              говорят с аудиторией на её языке и помогают приводить клиентов и продажи.
            </p>
            <p>
              SMM — <span className="editorial-accent-inline">способ разговаривать с людьми через экран</span>.
              В работе важны не только цифры и статистика, но чувство стиля, понимание трендов и
              способность попадать в интересы аудитории.
            </p>
          </div>

          <div ref={photosRef} className={`about__photos reveal ${photosVisible ? 'is-visible' : ''}`}>
            <MediaPlaceholder
              className="about__photo-main"
              src={aboutMainPhoto}
              alt="Ксения"
            />
            <MediaPlaceholder
              className="about__photo-secondary"
              src={aboutSecondaryPhoto}
              alt="Ксения"
            />
          </div>
        </div>
      </div>

      <div
        ref={lifestyleRef}
        className={`about__lifestyle reveal ${lifestyleVisible ? 'is-visible' : ''}`}
      >
        <div ref={parallaxOneRef} style={parallaxOneStyle} className="about__lifestyle-item about__lifestyle-item--one">
          <MediaPlaceholder tone="deep" alt="Кадр из жизни" caption="IMG_2120.jpg" />
        </div>
        <div ref={parallaxTwoRef} style={parallaxTwoStyle} className="about__lifestyle-item about__lifestyle-item--two">
          <MediaPlaceholder tone="cream" alt="Кадр из жизни" caption="IMG_2171 2.jpg" />
        </div>
      </div>
    </section>
  )
}
