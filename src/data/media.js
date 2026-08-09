// Метаданные для фото, которые пока не добавлены в проект (файлов ещё нет
// физически, поэтому мы не импортируем их напрямую — это сломало бы сборку).
//
// Как подключить реальное фото, например для hero:
//   1. Положите файл в src/assets/images/hero/IMG_4106.jpg
//   2. В components/Hero/Hero.jsx добавьте:
//        import heroPhoto from '../../assets/images/hero/IMG_4106.jpg'
//   3. Передайте heroPhoto в <MediaPlaceholder src={heroPhoto} ... />
//      (или замените MediaPlaceholder на обычный <img>).
//
// Ожидаемые файлы (см. README → «Где менять изображения»):
export const mediaSlots = {
  hero: { expectedFile: 'images/hero/IMG_4106.jpg', orientation: 'portrait' },
  aboutMain: { expectedFile: 'images/about/IMG_8682.jpg', orientation: 'portrait' },
  aboutSecondary: { expectedFile: 'images/about/IMG_3056.jpg', orientation: 'portrait' },
  lifestyleOne: { expectedFile: 'images/lifestyle/IMG_2120.jpg', orientation: 'portrait' },
  lifestyleTwo: { expectedFile: 'images/lifestyle/IMG_2171 2.jpg', orientation: 'portrait' },
}
