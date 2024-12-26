import { FC } from "react";
import Modal from "../template/Modal";
import { delGeoItem } from "@/app/store/geo/modalSlice";
import { clearAllStep } from "@/app/store/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "@/entities/hooks/hook";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ModalDel: FC = () => {
  const {
    modalState: { del },
  } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  return (
    <Modal>
      <DialogHeader>
        <DialogTitle>Удалить маркер?</DialogTitle>
      </DialogHeader>

      <DialogFooter>
        <Button
          type="button"
          onClick={() => {
            dispatch(delGeoItem(del.delId));
            dispatch(clearAllStep());
          }}
        >
          Удалить
        </Button>
      </DialogFooter>
    </Modal>
  );
};
export default ModalDel;
