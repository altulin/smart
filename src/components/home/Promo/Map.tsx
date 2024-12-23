import { FC } from "react";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import clsx from "clsx";
import style from "./Promo.module.scss";

const MapComponent: FC = () => {
  return (
    <YMaps query={{ apikey: `${import.meta.env.VITE_APP_YA_KEY}` }}>
      <div className={clsx(style.map)}>
        <Map
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
      </div>
    </YMaps>
  );
};
export default MapComponent;
