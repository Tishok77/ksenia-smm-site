import './MediaPlaceholder.css'

const TONE_CLASS = {
  sage: 'media-placeholder--sage',
  deep: 'media-placeholder--deep',
  cream: 'media-placeholder--cream',
  ink: 'media-placeholder--ink',
}

/**
 * Stand-in for a photo or video that hasn't been added to the project yet.
 * Renders a designed placeholder (not a broken image) so the layout, ratios
 * and editorial feel are final even before real media is dropped in.
 *
 * Once a real file exists, pass it as `src` (and `poster` for video) — the
 * component then renders the actual <img>/<video> instead of the
 * placeholder artwork, so no other markup needs to change.
 */
export default function MediaPlaceholder({
  src,
  poster,
  alt = '',
  kind = 'image',
  tone = 'sage',
  label,
  caption,
  className = '',
  eager = false,
  ...rest
}) {
  if (kind === 'video' && src) {
    return (
      <video
        className={`media-placeholder media-placeholder--media ${className}`}
        controls
        playsInline
        preload="none"
        poster={poster}
        {...rest}
      >
        <source src={src} />
      </video>
    )
  }

  if (src) {
    return (
      <img
        className={`media-placeholder media-placeholder--media ${className}`}
        src={src}
        alt={alt}
        loading={eager ? undefined : 'lazy'}
        decoding="async"
        {...rest}
      />
    )
  }

  return (
    <div
      className={`media-placeholder ${TONE_CLASS[tone] ?? TONE_CLASS.sage} ${className}`}
      role="img"
      aria-label={alt || label || 'Изображение появится позже'}
      {...rest}
    >
      <span className="media-placeholder__mark" aria-hidden="true">
        {kind === 'video' ? (
          <svg viewBox="0 0 48 48" width="34" height="34" fill="none">
            <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="1.4" />
            <path d="M20 16.5L32.5 24L20 31.5V16.5Z" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 48 48" width="30" height="30" fill="none">
            <rect x="5" y="9" width="38" height="30" rx="2" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="17" cy="19" r="3.4" stroke="currentColor" strokeWidth="1.4" />
            <path d="M5 32L17 22L26 29L34 21L43 30" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        )}
      </span>
      {label ? <span className="media-placeholder__label">{label}</span> : null}
      {caption ? <span className="media-placeholder__caption">{caption}</span> : null}
    </div>
  )
}
