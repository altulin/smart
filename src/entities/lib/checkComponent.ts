/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

export const isComponent = (component: FC<any> | undefined) => {
  return typeof component === "function";
};
