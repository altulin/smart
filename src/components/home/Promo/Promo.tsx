/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import clsx from "clsx";
import style from "./Promo.module.scss";
import SearchComponent from "./SearchComponent";
import GeoArray from "./GeoArray";
import MapComponent from "./Map";

const Promo: FC = () => {
  return (
    <section className={clsx(style.promo)}>
      <div className={clsx(style.promo__inner, "container")}>
        <SearchComponent />
        <GeoArray />
        <MapComponent />
      </div>
    </section>
  );
};

export default Promo;
