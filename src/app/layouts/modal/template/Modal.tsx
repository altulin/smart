import ModalPortal from "../ModalPortal";
import { clearAllStep } from "@/app/store/modal/modalSlice";
import { useClickAway } from "@uidotdev/usehooks";
import { FC, ReactNode, RefObject, useCallback, useEffect } from "react";
import { useAppDispatch } from "@/entities/hooks/hook";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface IModal {
  children: ReactNode;
}

const Modal: FC<IModal> = ({ children }) => {
  const dispatch = useAppDispatch();

  const clearModal = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (e: any) => {
      if (e.key === "Escape") {
        dispatch(clearAllStep());
      }
    },

    [dispatch],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.addEventListener("keydown", clearModal);

    return () => {
      document.body.style.overflow = "visible";
      document.body.removeEventListener("keydown", clearModal);
    };
  }, [clearModal]);

  const ref = useClickAway(() => {
    dispatch(clearAllStep());
  });

  return (
    <ModalPortal>
      <Dialog open onOpenChange={() => dispatch(clearAllStep())}>
        <DialogContent ref={ref as RefObject<HTMLDivElement>}>
          {children}
        </DialogContent>
      </Dialog>
    </ModalPortal>
  );
};
export default Modal;
