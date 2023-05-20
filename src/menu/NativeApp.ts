import type { LaunchApp, Launch } from './launchapp'
import { mdiWeb, mdiAlertOutline, mdiInformation } from '@mdi/js'

const launch: Launch = async (p) => {
  alert(p)
}

export const app1: LaunchApp = {
  id: 101,
  title: 'ntv sample application',
  img: '/src/assets/android-icon.svg',  // https://uxwing.com/
  url: '',
  launch: launch
}

export const app2: LaunchApp = {
  id: 101,
  title: 'ntv product application',
  img: '/src/assets/logo.svg',
  url: '',
  launch: launch
}

export const app3: LaunchApp = {
  id: 101,
  title: 'pwa',
  img: '/src/assets/pwa-icon.svg',    // https://uxwing.com/
  url: '',
  launch: launch
}

export const app4: LaunchApp = {
  id: 101,
  title: 'etc',
  icon: mdiInformation,
  url: '',
  launch: launch
}

export const app5: LaunchApp = {
  id: 101,
  title: 'web',
  img: undefined,
  icon: mdiWeb,
  url: '',
  launch: launch
}

export const app6: LaunchApp = {
  id: 101,
  title: '工事中',
  img: undefined,
  icon: mdiAlertOutline,
  url: '',
  launch: launch
}