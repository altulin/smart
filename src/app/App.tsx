import { FC } from "react";
import ModalManager from "./layouts/modal/ModalManager";
import "./styles/global.css";
import { router } from "./routers/AppRouter";
import { RouterProvider } from "react-router";

const App: FC = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ModalManager />
    </>
  );
};

export default App;
