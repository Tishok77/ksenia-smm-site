// Метаданные для фото, которые пока не добавлены в проект (файлов ещё нет
// физически, поэтому мы не импортируем их напрямую — это сломало бы сборку).
// Hero и оба фото в "Обо мне" уже подключены напрямую в соответствующих
// компонентах — здесь остались только те, что всё ещё ждут реальных файлов.
//
// Как подключить реальное фото, например для lifestyleOne:
//   1. Положите файл в src/assets/images/lifestyle/IMG_2120.jpg
//   2. В components/About/About.jsx добавьте:
//        import lifestyleOne from '../../assets/images/lifestyle/IMG_2120.jpg'
//   3. Передайте lifestyleOne в <MediaPlaceholder src={lifestyleOne} ... />
//
// Ожидаемые файлы (см. README → «Где менять изображения»):
export const mediaSlots = {
  lifestyleOne: { expectedFile: 'images/lifestyle/IMG_2120.jpg', orientation: 'portrait' },
  lifestyleTwo: { expectedFile: 'images/lifestyle/IMG_2171 2.jpg', orientation: 'portrait' },
}
