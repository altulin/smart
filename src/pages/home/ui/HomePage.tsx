import clsx from "clsx";
import { FC } from "react";
import style from "./HomePage.module.scss";
import SearchComponent from "./searchComponent/SearchComponent";
import GeoArray from "./geoArray/GeoArray";
import MapComponent from "./mapComponent/Map";

const HomePage: FC = () => {
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
export default HomePage;
