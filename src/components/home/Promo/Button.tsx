import clsx from "clsx";
import { FC, useRef } from "react";
import style from "./Promo.module.scss";
import { IGeoItem } from "@/store/geo/initialState";
import useDoubleClick from "use-double-click";
import { useAppDispatch } from "@/hooks/hook";
import { stepTo } from "@/store/modal/modalSlice";

const Button: FC<{ item: IGeoItem }> = ({ ...props }) => {
  const buttonRef = useRef();
  const dispatch = useAppDispatch();
  const { item } = props;

  const handleOneClick = (e, id: number) => {
    dispatch(stepTo({ edit: { step: 1, editId: id } }));
    e && e.stopPropagation();
  };

  const handleDoubleClick = (e, id: number) => {
    dispatch(stepTo({ del: { step: 1, delId: id } }));
    e && e.stopPropagation();
  };

  useDoubleClick({
    onSingleClick: (e) => {
      handleOneClick(e, item.id);
    },
    onDoubleClick: (e) => {
      handleDoubleClick(e, item.id);
    },
    ref: buttonRef,
    latency: 250,
  });

  return (
    <button type="button" className={clsx(style.marker)} ref={buttonRef}>
      <h3 className={clsx(style.marker__title)}>{item.label}</h3>
      <p className={clsx(style.marker__addr)}>{item.address}</p>
      <ul className={clsx(style.coordinates)}>
        <li className={clsx(style.coordinates__item)}>
          <span className={clsx(style.coordinates__label)}>широта:</span>
          <span className={clsx(style.coordinates__value)}>
            {item.latitude}
          </span>
        </li>
        <li className={clsx(style.coordinates__item)}>
          <span className={clsx(style.coordinates__label)}>долгота:</span>
          <span className={clsx(style.coordinates__value)}>
            {item.longitude}
          </span>
        </li>
      </ul>
    </button>
  );
};
export default Button;
