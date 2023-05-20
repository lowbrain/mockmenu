import * as ntv from './NativeApp'

export type Launch = (u: string) => Promise<void>
export interface LaunchApp {
  id: number
  title: string
  img?: string
  icon?: string
  class?: String
  url?: string
  launch: Launch
}

export const list: Array<LaunchApp> = [
  ntv.app1,
  ntv.app2,
  ntv.app3,
  ntv.app4,
  ntv.app5,
  ntv.app6
]
