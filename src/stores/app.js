import { create } from 'zustand'
import { APPNAME } from '@/config/consts'

export const useAppStore = create((set, get) => ({
  appName: APPNAME,
  setAppName: (appName) => {
    set({ appName })
  }
}))
