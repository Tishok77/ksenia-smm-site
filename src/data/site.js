// Site-wide configuration: navigation, contacts, and the Google Form link.
// Edit values here — components read from this file, no need to touch JSX.

export const nav = [
  { label: 'Обо мне', href: '#about' },
  { label: 'Кейсы', href: '#cases' },
  { label: 'Услуги', href: '#services' },
  { label: 'Контакты', href: '#consultation' },
]

export const contacts = {
  instagramHandle: '@k_tishh',
  instagramUrl: 'https://instagram.com/k_tishh',
  email: 'kseniatishinawork@gmail.com',
}

// TODO: paste the real Google Form link here, e.g. 'https://forms.gle/xxxxxxxx'.
// Until it's set, the "ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ" button renders as a
// clearly-labelled disabled state instead of linking to a broken page.
export const googleFormUrl = ''
