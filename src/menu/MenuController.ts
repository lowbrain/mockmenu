export interface Menu {
  id: number
  type: 'ntv' | 'pwa' | 'web'
  name: string
  icon: string
  url: string
}

// 画面のfunction(menu)
export const menuList: Array<Menu> = [
  { id:  0, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id:  1, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id:  2, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id:  3, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id:  4, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id:  5, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id:  6, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id:  7, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id:  8, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id:  9, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id: 10, type: 'ntv', name: 'test', icon: 'icon', url: 'url' },
  { id: 11, type: 'ntv', name: 'test', icon: 'icon', url: 'url' }
]

// アプリ起動
export const launchApp = (menu: Menu, param: string) => {
  switch (menu.type) {
    case 'ntv':
      launchNtv(menu, param)
      break
    case 'pwa':
      launchPwa(menu, param)
      break
    case 'web':
      launchWeb(menu, param)
      break
  }
}

//
const launchNtv = (menu: Menu, param: string) => {
  let launchUrl: string
  switch (menu.id) {
    default:
      launchUrl = `${menu.url}?${param}`
      break
  }
  location.href = launchUrl
}

//
const launchPwa = (menu: Menu, param: string) => {
  let launchUrl: string
  switch (menu.id) {
    default:
      launchUrl = `${menu.url}?${param}`
      break
  }
  location.href = launchUrl
}

//
const launchWeb = (menu: Menu, param: string) => {
  let launchUrl: string
  switch (menu.id) {
    default:
      launchUrl = `${menu.url}?${param}`
      break
  }
  location.href = launchUrl
}
