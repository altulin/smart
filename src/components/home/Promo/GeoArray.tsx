/* eslint-disable react-hooks/rules-of-hooks */
import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import { useAppSelector } from "@/hooks/hook";
import { checkArr } from "@/service/checkArr";
import { IGeoItem } from "@/store/geo/initialState";
import Button from "./Button";

const GeoArray: FC = () => {
  const { geoArr } = useAppSelector((state) => state.geo);

  if (!checkArr(geoArr)) return null;

  return (
    <ul className={clsx(style.list)}>
      {geoArr.map((item: IGeoItem) => (
        <li key={item.id} className={clsx(style.list__item)}>
          <Button item={item} />
        </li>
      ))}
    </ul>
  );
};
export default GeoArray;
