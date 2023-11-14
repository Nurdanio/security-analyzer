import { create } from "zustand";

interface ResultState {
  result: string;
  setResult: (message: string) => void;
}

export const useResultStore = create<ResultState>((set) => ({
  result: "",
  setResult: (message) => set(() => ({ result: message })),
}));
