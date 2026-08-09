// Кейсы. Клиенты обезличены — без названий компаний, логотипов и username.
// Цифры результатов реальные и не должны дополняться выдуманными метриками.

export const cases = [
  {
    id: 'case-01',
    number: '01',
    niche: 'Детские праздники & events',
    duration: '8 месяцев сотрудничества',
    work: [
      'Ведение социальных сетей',
      'Instagram',
      'Telegram',
      'VK',
      'Threads',
      'Мобильные съёмки мероприятий',
      'Съёмка экспертных видео',
      'Reels',
      'Оформление',
      'Коллаборации',
      'Рекламные интеграции',
    ],
    stat: {
      value: 150,
      prefix: '+',
      suffix: '',
      label: 'подписчиков в Telegram за 2 недели',
    },
  },
  {
    id: 'case-02',
    number: '02',
    niche: 'Личный блог с нуля',
    duration: 'Продвижение через Reels — результаты первых трёх недель',
    work: [],
    stats: [
      { value: 33.3, decimals: 1, suffix: 'K', label: 'просмотров' },
      { value: 1.3, decimals: 1, suffix: 'K', label: 'взаимодействий' },
      { value: 450, decimals: 0, suffix: '', label: 'действий в профиле' },
      { value: 39, decimals: 0, prefix: '+', suffix: '', label: 'подписчиков' },
    ],
  },
]
