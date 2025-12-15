import { create } from "zustand"
import { immer } from "zustand/middleware/immer"


const INITIAL_Z_INDEX = 1000;

const createWindowConfig = () => ({
    
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  notes: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  calendar: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },

  // ✅ FIXED: video (not videofile)
  video: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }
})



const useWindowStore = create(
  immer((set) => ({
    windows: createWindowConfig(),
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey]
        if (!win) return
        win.isOpen = true
        win.zIndex = state.nextZIndex++
        win.data = data
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey]
        if (!win) return
        win.isOpen = false
        win.zIndex = INITIAL_Z_INDEX
        win.data = null
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey]
        if (!win) return
        win.zIndex = state.nextZIndex++
      }),
  }))
)

export default useWindowStore
