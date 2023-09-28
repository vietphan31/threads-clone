import { create } from "zustand";

export type ModalType = "createThread";

export interface ModalData {}

interface ModalStore {
  type: ModalType | null;
  data: ModalData | null;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData | null) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: null,
  isOpen: false,
  onOpen: (type, data = null) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
