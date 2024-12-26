import { FC } from "react";
import SearchComponent from "./searchComponent/SearchComponent";
import GeoArray from "./geoArray/GeoArray";
import MapComponent from "./mapComponent/Map";

const HomePage: FC = () => {
  return (
    <section className="container ml-auto mr-auto px-4 pb-10">
      <div>
        <SearchComponent />
        <GeoArray />
        <MapComponent />
      </div>
    </section>
  );
};
export default HomePage;
