import { FC } from "react";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import clsx from "clsx";
import { checkArr } from "@/entities/lib/checkArr";
import PlacemarkComponent from "./PlacemarkComponent";
import { useAppSelector } from "@/entities/hooks/hook";

const MapComponent: FC = () => {
  const { geoArr, center } = useAppSelector((state) => state.geo);

  return (
    <YMaps
      query={{
        apikey: `${import.meta.env.VITE_APP_YA_KEY}`,
      }}
    >
      <div className={"h-66v relative mt-8 w-full overflow-hidden rounded-2xl"}>
        <Map
          defaultState={{
            center,
            zoom: 9,
          }}
          state={{ center, zoom: 9, controls: [] }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
          }}
          instanceRef={(myMap) => {
            myMap && myMap.behaviors.disable("dblClickZoom");
          }}
        >
          {checkArr(geoArr) &&
            geoArr.map((item) => {
              return <PlacemarkComponent key={item.id} {...item} />;
            })}
        </Map>
      </div>
    </YMaps>
  );
};
export default MapComponent;
