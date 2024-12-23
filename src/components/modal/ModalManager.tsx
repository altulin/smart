import { useAppSelector } from "@/hooks/hook";
import ModalAuth1 from "./auth/ModalAuth1";
import ModalError from "./error/ModalError";
import useGetCurrentModal from "@/hooks/getCurrentModal";
import { FC } from "react";
import { EKeys, TModalState } from "@/store/modal/initialState";
import ModalAddMarker from "./add/ModalAddMarker";
import ModalDel from "./del/ModalDel";
import ModalEdit from "./edit/ModalEdit";

interface IModalElements {
  modalState: TModalState | null;
}

const ModalElements: FC<IModalElements> = ({ modalState }) => {
  const modal = useGetCurrentModal(modalState);

  switch (modal) {
    case `${EKeys.AUTH}-1`:
      return <ModalAuth1 />;

    case `${EKeys.ADD}-1`:
      return <ModalAddMarker />;

    case `${EKeys.EDIT}-1`:
      return <ModalEdit />;

    case `${EKeys.DEL}-1`:
      return <ModalDel />;

    case EKeys.ERROR:
      return <ModalError />;

    default:
      return null;
  }
};

const ModalManager = () => {
  const { modalState } = useAppSelector((state) => state.modal);
  return modalState ? <ModalElements modalState={modalState} /> : null;
};

export default ModalManager;
