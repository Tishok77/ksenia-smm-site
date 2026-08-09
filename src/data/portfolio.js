// Портфолио — одна общая хаотичная editorial-галерея без категорий/фильтров.
// `src`/`poster` намеренно `null`: реальных материалов пока нет. Компонент
// Portfolio рисует стилизованный placeholder вместо `null`, поэтому на
// сайте нет битых ссылок. Когда появится файл — положите его в
// src/assets/images/portfolio/ или src/assets/videos/portfolio/, импортируйте
// в этом файле и подставьте в поле `src` (для видео дополнительно `poster`).
//
// `size` управляет размером карточки в сетке галереи: 's' | 'm' | 'l' | 'xl'.
// `rotate` — угол лёгкого наклона карточки (в градусах).
// `accent: true` — усиленный визуальный акцент (см. IMG_4953 по ТЗ).

export const portfolioItems = [
  {
    id: 'p01',
    type: 'video',
    kind: 'Reels',
    size: 'l',
    rotate: -3,
    src: null,
    poster: null,
    expectedFile: 'videos/portfolio/reel-01.mp4',
  },
  {
    id: 'p02',
    type: 'image',
    kind: 'Визуал',
    size: 'm',
    rotate: 2,
    src: null,
    expectedFile: 'images/portfolio/visual-01.jpg',
  },
  {
    id: 'p03',
    type: 'image',
    kind: 'Карусель',
    size: 's',
    rotate: -1,
    src: null,
    expectedFile: 'images/portfolio/carousel-01.jpg',
  },
  {
    id: 'p04',
    type: 'image',
    kind: 'Акцент',
    size: 'xl',
    rotate: -2,
    accent: true,
    src: null,
    expectedFile: 'images/portfolio/IMG_4953.jpg',
  },
  {
    id: 'p05',
    type: 'video',
    kind: 'Stories',
    size: 's',
    rotate: 4,
    src: null,
    poster: null,
    expectedFile: 'videos/portfolio/story-01.mp4',
  },
  {
    id: 'p06',
    type: 'image',
    kind: 'Визуал',
    size: 'm',
    rotate: 1,
    src: null,
    expectedFile: 'images/portfolio/visual-02.jpg',
  },
  {
    id: 'p07',
    type: 'image',
    kind: 'Деталь',
    size: 's',
    rotate: 3,
    src: null,
    expectedFile: 'images/portfolio/IMG_4021.jpg',
  },
  {
    id: 'p08',
    type: 'video',
    kind: 'Reels',
    size: 'm',
    rotate: -2,
    src: null,
    poster: null,
    expectedFile: 'videos/portfolio/reel-02.mp4',
  },
  {
    id: 'p09',
    type: 'image',
    kind: 'Карусель',
    size: 'l',
    rotate: 2,
    src: null,
    expectedFile: 'images/portfolio/carousel-02.jpg',
  },
  {
    id: 'p10',
    type: 'image',
    kind: 'Визуал',
    size: 's',
    rotate: -3,
    src: null,
    expectedFile: 'images/portfolio/visual-03.jpg',
  },
  {
    id: 'p11',
    type: 'video',
    kind: 'Stories',
    size: 'm',
    rotate: 1,
    src: null,
    poster: null,
    expectedFile: 'videos/portfolio/story-02.mp4',
  },
]
