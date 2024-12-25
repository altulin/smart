/* eslint-disable react-hooks/rules-of-hooks */
import clsx from "clsx";
import { FC } from "react";
import style from "../HomePage.module.scss";
import { checkArr } from "@/entities/lib/checkArr";
import { IGeoItem } from "@/app/store/geo/initialState";
import Button from "../button/Button";
import { useAppSelector } from "@/entities/hooks/hook";

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
