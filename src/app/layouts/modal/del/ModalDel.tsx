import { FC } from "react";
import Modal from "../template/Modal";
import clsx from "clsx";
import style from "../template/Modal.module.scss";
import { delGeoItem } from "@/app/store/geo/modalSlice";
import { clearAllStep } from "@/app/store/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/entities/hooks/hook";

const ModalDel: FC = () => {
  const {
    modalState: { del },
  } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  return (
    <Modal>
      <div className={clsx(style.modal__form)}>
        <h2 className={clsx(style.modal__title)}>Удалить маркер?</h2>
        <button
          className={clsx(style.modal__button, "form__button")}
          onClick={() => {
            dispatch(delGeoItem(del.delId));
            dispatch(clearAllStep());
          }}
        >
          удалить
        </button>
      </div>
    </Modal>
  );
};
export default ModalDel;
