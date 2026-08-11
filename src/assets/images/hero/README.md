# Hero photo

`IMG_7138.webp` is the live hero photo (converted from the original
`IMG_7138 2.HEIC`, auto-oriented and re-encoded to WebP).

Wired up in `src/components/Hero/Hero.jsx`:

```js
import heroPhoto from '../../assets/images/hero/IMG_7138.webp'
```

passed to `<MediaPlaceholder src={heroPhoto} eager fetchPriority="high" alt="Ксения" />`.

This image affects LCP — keep it eager-loaded (not `loading="lazy"`), which
`MediaPlaceholder`'s `eager` prop already handles.

To replace it with a different photo: drop the new file here, update the
import path above, and re-check `--photo-position` in `Hero.css` (`.hero__photo`)
since it's tuned to this specific photo's framing.
