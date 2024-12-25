import clsx from "clsx";
// import Header from "../components/header/Header";
// import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router";

const Template = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="container ml-auto mr-auto pt-40 lg:pt-20">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Template;
