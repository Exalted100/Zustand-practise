import create from "zustand";

const useStore = create((set) => ({
  counterDisplay: "first",
  displayAnotherCounter: (counter) => {
    set((state) => ({ counterDisplay: counter }));
  },
  firstCounter: 0,
  incrementFirst: () =>
    set((state) => ({ firstCounter: state.firstCounter + 1 })),
  restartFirst: () => set({ firstCounter: 0 }),
  secondCounter: 0,
  incrementSecond: () =>
    set((state) => ({ secondCounter: state.secondCounter + 1 })),
  thirdCounter: 0,
  incrementThird: () =>
    set((state) => ({ thirdCounter: state.thirdCounter + 1 })),
}));

export default useStore;
