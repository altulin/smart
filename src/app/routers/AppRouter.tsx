import HomePage from "@/pages/home/ui/HomePage";
import Template from "@/pages/template/Template";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Template,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
    ],
  },
]);
