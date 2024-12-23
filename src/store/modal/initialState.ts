import { IGeoItem } from "../geo/initialState";

export enum EKeys {
  AUTH = "auth",
  ERROR = "error",
  SUCCESS = "success",
  REGISTRATION = "registration",
  ADD = "add",
  DEL = "del",
  EDIT = "edit",
}

export const keysArray = Object.values(EKeys);

export type TModalState = {
  [K in (typeof keysArray)[number]]?:
    | { step: number; delId?: number; editId?: number; data?: IGeoItem }
    | { text: string };
};

interface IInitialState {
  modalState: TModalState | null;
}

export const initialState: IInitialState = {
  modalState: null,
};
