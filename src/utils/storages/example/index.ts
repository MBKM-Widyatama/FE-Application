import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ExampleStore } from './types/states'
import { Actions } from './types/action'

// global state management if want to save localStorage
export const useExampleStorage = create<ExampleStore & Actions>()(
  persist(
    (set) => ({
      isDarkMode: false,
      changeDarkMode: (value) => set(() => ({ isDarkMode: value })),
    }),
    { name: 'example-storage', getStorage: () => localStorage },
  ),
)
