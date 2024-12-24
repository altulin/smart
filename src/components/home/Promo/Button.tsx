import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import { IGeoItem } from "@/store/geo/initialState";

import { useAppDispatch } from "@/hooks/hook";
// import { stepTo } from "@/store/modal/modalSlice";
import { getCenter } from "@/store/geo/modalSlice";

const Button: FC<{ item: IGeoItem }> = ({ ...props }) => {
  // const buttonRef = useRef<HTMLButtonElement>(null);
  const dispatch = useAppDispatch();
  const { item } = props;

  const handleClick = () => {
    dispatch(getCenter(item));
  };

  // const handleDoubleClick = () => {
  //   dispatch(stepTo({ del: { step: 1, delId: item.id } }));
  // };

  // useDoubleClick({
  //   onSingleClick: () => {
  //     handleOneClick();
  //   },
  //   onDoubleClick: () => {
  //     handleDoubleClick();
  //   },
  //   ref: buttonRef,
  //   latency: 250,
  // });

  return (
    <button type="button" className={clsx(style.marker)} onClick={handleClick}>
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
