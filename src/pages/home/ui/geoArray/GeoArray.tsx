/* eslint-disable react-hooks/rules-of-hooks */
import { FC } from "react";
import { checkArr } from "@/entities/lib/checkArr";
import { IGeoItem } from "@/app/store/geo/initialState";
import Button from "../button/Button";
import { useAppSelector } from "@/entities/hooks/hook";

const GeoArray: FC = () => {
  const { geoArr } = useAppSelector((state) => state.geo);

  if (!checkArr(geoArr)) return null;

  return (
    <ul className="mt ph:grid-cols-2 emt:grid-cols-3 ldt:grid-cols-4 max_dt:grid-cols-5 tb:grid-cols-2 my-8 grid grid-cols-1 gap-6">
      {geoArr.map((item: IGeoItem) => (
        <li className="flex flex-col" key={item.id}>
          <Button item={item} />
        </li>
      ))}
    </ul>
  );
};
export default GeoArray;
