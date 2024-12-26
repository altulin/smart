import clsx from "clsx";
// import Header from "../components/header/Header";
// import Footer from "@/components/footer/Footer";
import { Outlet } from "react-router";

const Template = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="grow pt-40">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Template;
