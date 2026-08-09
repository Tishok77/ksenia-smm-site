# Hero photo

Put the main hero photo here as `IMG_4106.jpg` (vertical/portrait orientation).

Then in `src/components/Hero/Hero.jsx`:

```js
import heroPhoto from '../../assets/images/hero/IMG_4106.jpg'
```

and pass it to `<MediaPlaceholder src={heroPhoto} eager alt="Ксения" />`.

This image affects LCP — keep it eager-loaded (not `loading="lazy"`), which
`MediaPlaceholder`'s `eager` prop already handles.
