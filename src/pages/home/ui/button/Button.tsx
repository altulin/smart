import clsx from "clsx";
import { FC } from "react";
import style from "../HomePage.module.scss";
import { IGeoItem } from "@/app/store/geo/initialState";

import { getCenter } from "@/app/store/geo/modalSlice";
import { useAppDispatch } from "@/entities/hooks/hook";

const Button: FC<{ item: IGeoItem }> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const { item } = props;

  const handleClick = () => {
    dispatch(getCenter(item));
  };

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
