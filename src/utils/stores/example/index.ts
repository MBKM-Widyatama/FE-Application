import { create } from 'zustand'
import { ExampleStore } from './types/states'
import { Actions } from './types/action'

// global state management default
export const useExampleStore = create<ExampleStore & Actions>()((set) => ({
  myNumber: 0,
  increaseNumber: () => set((state) => ({ myNumber: state.myNumber + 1 })),
  decreaseNumber: () => set((state) => ({ myNumber: state.myNumber - 1 })),
  changeNumber: (number) => set(() => ({ myNumber: number + 1 })),
}))
