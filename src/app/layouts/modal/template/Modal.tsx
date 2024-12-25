import ModalPortal from "../ModalPortal";
import Icon from "@/shared/assets/images/svg/menuClose.svg?react";
import { clearAllStep } from "@/app/store/modal/modalSlice";
import { useClickAway } from "@uidotdev/usehooks";
import { FC, ReactNode, RefObject, useCallback, useEffect } from "react";
import { useAppDispatch } from "@/entities/hooks/hook";

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
      <div
        className={
          "fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center overflow-y-auto bg-black/50 px-4 py-4 backdrop-blur-sm md:py-20"
        }
      >
        <div
          ref={ref as RefObject<HTMLDivElement>}
          className={
            "relative h-max w-full overflow-hidden rounded-2xl bg-white px-8 py-10 md:w-1/2 lg:w-1/3"
          }
        >
          <button
            className={"absolute right-2 top-2 h-10 w-10 text-black"}
            onClick={() => dispatch(clearAllStep())}
          >
            <Icon />
          </button>
          {children}
        </div>
      </div>
    </ModalPortal>
  );
};
export default Modal;
