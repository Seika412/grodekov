import { create } from 'zustand';
import type {ModalTypeEnum} from "../types/ModalTypeEnum.ts";

interface GlobalState {
  isShowModal: boolean;
  isLogin: boolean;
  isLoading: boolean;
  isShowMapModal: boolean;
  modalType: ModalTypeEnum;
  contextId: number | null;
  modalActions: ModalTypeEnum[]

  setContextId: (id: number) => void;
  setIsLoading: (bool: boolean) => void;
  setIsShowMapModal: (bool: boolean) => void;
  setIsLogin: (bool: boolean) => void;
  deleteLastModalAction: () => void;
  resetModalActions: () => void;
  addModalAction: (type: ModalTypeEnum) => void;
  setShowModal: (bool: boolean) => void;
  setModalType: (type: ModalTypeEnum) => void;
}

export const useGlobalStore = create<GlobalState>((set, getState) => ({
  isShowModal: false,
  isLogin: true,
  isLoading: false,
  modalType: "context",
  isShowMapModal: true,
  contextId: null,
  modalActions: [],

  setContextId: (id: number) => set({ contextId: id }),
  setIsLogin: (bool: boolean) => set({ isLogin: bool }),
  setIsLoading: (bool: boolean) => set({isLoading: bool}),
  setIsShowMapModal: (bool: boolean) => set({ isShowMapModal: bool }),
  addModalAction: (type: ModalTypeEnum) => set({ modalActions: [...getState().modalActions,type] }),
  deleteLastModalAction: () => {
    const actions = getState().modalActions
    actions.pop()

    return set({modalActions: actions})
  },
  resetModalActions: () => set({modalActions: []}),
  setModalType: (type: ModalTypeEnum) => set({ modalType: type }),
  setShowModal: (bool: boolean) => set({ isShowModal: bool }),
}));