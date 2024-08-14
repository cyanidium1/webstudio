import { create } from 'zustand';

const useStore = create(set => ({
  language: 'en',
  setLanguage: lang => set({ language: lang }),
}));

export default useStore;
