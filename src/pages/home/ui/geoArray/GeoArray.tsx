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
    <ul className="mt my-8 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
      {geoArr.map((item: IGeoItem) => (
        <li className="flex flex-col" key={item.id}>
          <Button item={item} />
        </li>
      ))}
    </ul>
  );
};
export default GeoArray;
