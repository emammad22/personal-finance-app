import { create } from "zustand";

type UserEditProps = {
  isEditOpen: boolean;
};

type UserEditActions = {
  setEditOpen: () => void;
  setEditClose: () => void;
};

type UserEdit = UserEditProps & UserEditActions;

const useUserEdit = create<UserEdit>((set) => ({
  isEditOpen: false,
  setEditOpen: () => {
    set({ isEditOpen: true });
  },
  setEditClose: () => {
    set({ isEditOpen: false });
  },
}));

export { useUserEdit };
