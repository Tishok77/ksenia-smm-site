# Portfolio videos (Reels / Stories)

Vertical (9:16) video clips for the gallery. Keep files reasonably
compressed (H.264 mp4 recommended) — the gallery only loads a clip when the
visitor taps play, but file size still affects that moment.

Add a poster image alongside each video (used as the `poster` attribute so
nothing has to decode before the visitor taps play).

Wire new files into `src/data/portfolio.js` by importing them and setting
`src` (and `poster`) on the matching item.
