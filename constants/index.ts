export const menuItems = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'UseState', path: '/hooks/usestate' },
  { id: 3, name: 'UseEffect', path: '/hooks/useeffect' },
  { id: 4, name: 'UseRef', path: '/hooks/useref' },
  { id: 5, name: 'UseMemo', path: '/hooks/usememo' },
  { id: 6, name: 'UseCallback', path: '/hooks/usecallback' },
  { id: 7, name: 'Hoc', path: '/hoc' },
  { id: 8, name: 'Memo', path: '/memo' },
  { id: 9, name: 'CloneElement', path: '/cloneelement' },
  { id: 10, name: 'Children', path: '/children' }
]

export const footerLinks = [
  {
    title: 'About',
    links: [
      { title: 'How it works', url: '/' },
      { title: 'Featured', url: '/' },
      { title: 'Partnership', url: '/' },
      { title: 'Bussiness Relation', url: '/' }
    ]
  },
  {
    title: 'Company',
    links: [
      { title: 'Events', url: '/' },
      { title: 'Blog', url: '/' },
      { title: 'Podcast', url: '/' },
      { title: 'Invite a friend', url: '/' }
    ]
  },
  {
    title: 'Socials',
    links: [
      { title: 'Discord', url: '/' },
      { title: 'Instagram', url: '/' },
      { title: 'Twitter', url: '/' },
      { title: 'Facebook', url: '/' }
    ]
  }
]

// https://react.dev/
export const pointsMenu: {
  title: string
  href: string
  description: string
}[] = [
  {
    title: 'UseState',
    href: '/hooks/usestate',
    description:
      'Возвращает значение с состоянием и функцию для его обновления.'
  },
  {
    title: 'UseEffect',
    href: '/hooks/useeffect',
    description:
      'Для выполнения побочных эффектов в функциональных компонентах..'
  },
  {
    title: 'UseContext',
    href: '/hooks/useContext',
    description:
      'Позволяет читать контекст вашего компонента и подписываться на его изменения.'
  },
  {
    title: 'UseRef',
    href: '/hooks/useref',
    description:
      'Позволяет ссылаться на значение, которое не требуется для рендеринга.'
  },
  {
    title: 'UseMemo',
    href: '/hooks/usememo',
    description:
      'Позволяет кэшировать результат вычислений между повторными рендерингами.'
  },
  {
    title: 'UseCallback',
    href: '/hooks/usecallback',
    description:
      'Кэширующий функцию между рендерами для оптимизации производительности.'
  },
  {
    title: 'Errors',
    href: '/hooks/errors',
    description: 'Не правильная реализация и варианты исправления.'
  }
]
