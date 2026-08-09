import { reviews } from '../../data/reviews'
import MediaPlaceholder from '../common/MediaPlaceholder'
import { useReveal } from '../../hooks/useReveal'
import './Reviews.css'

function ReviewCard({ review }) {
  const [ref, isVisible] = useReveal({ threshold: 0.3 })

  return (
    <article ref={ref} className={`review-card reveal ${isVisible ? 'is-visible' : ''}`}>
      <MediaPlaceholder
        tone="cream"
        kind="image"
        label={review.screenshot ? undefined : review.label}
        caption={review.screenshot ? undefined : 'Скриншот появится здесь'}
        src={review.screenshot}
        alt={`Скриншот отзыва — ${review.label}`}
        className="review-card__screenshot"
      />
      <p className="review-card__quote italic-accent">
        {review.quote ?? 'Текст отзыва появится здесь'}
      </p>
      <p className="review-card__name">{review.name ?? 'Имя клиента — по согласованию'}</p>
    </article>
  )
}

export default function Reviews() {
  const [headingRef, headingVisible] = useReveal()

  return (
    <section id="reviews" className="reviews section">
      <div className="container">
        <div ref={headingRef} className={`reveal ${headingVisible ? 'is-visible' : ''}`}>
          <span className="eyebrow">Что говорят</span>
          <h2 className="section-heading">Отзывы</h2>
        </div>
      </div>

      <div className="reviews__lane">
        {reviews.map((review) => (
          <ReviewCard review={review} key={review.id} />
        ))}
      </div>
    </section>
  )
}
