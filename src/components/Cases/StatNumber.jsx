import { useCountUp } from '../../hooks/useCountUp'

export default function StatNumber({ value, decimals = 0, prefix = '', suffix = '', label, className = '' }) {
  const [ref, formatted] = useCountUp(value, { decimals, prefix, suffix })

  return (
    <div ref={ref} className={`stat-number ${className}`}>
      <span className="stat-number__value">{formatted}</span>
      <span className="stat-number__label">{label}</span>
    </div>
  )
}
