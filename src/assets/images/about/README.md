# About photos

- `IMG_3056.jpg` — main photo (`.about__photo-main`).
- `IMG_4106.jpg` — secondary, overlapping photo (`.about__photo-secondary`).

Both are wired up in `src/components/About/About.jsx`. Framing is tuned per
photo via the `--photo-position` custom property in `About.css` (different
values for mobile vs. desktop) — if you swap either file for a different
photo, re-check that value against the new photo's composition.
