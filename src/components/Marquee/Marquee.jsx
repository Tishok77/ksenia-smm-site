import './Marquee.css'

const PHRASE = 'Story. Mood. Magic.'
const REPEATED = Array.from({ length: 6 }, () => PHRASE)

function MarqueeGroup() {
  return (
    <div className="marquee__group">
      {REPEATED.map((phrase, index) => (
        <span className="marquee__item italic-accent" key={index}>
          {phrase}
        </span>
      ))}
    </div>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
      <span className="visually-hidden">Story. Mood. Magic.</span>
    </div>
  )
}
