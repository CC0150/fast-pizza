import { create } from "zustand";

interface UserStore {
  userName: string;
  updateUserName: (userName: string) => void;
}

const useUserStore = create<UserStore>((set) => ({
  userName: "",
  updateUserName: (userName: string) => set({ userName }),
}));

export default useUserStore;
