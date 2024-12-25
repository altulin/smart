import clsx from "clsx";
import { FC } from "react";

const Title: FC<{ label: string; className?: string }> = ({ ...props }) => {
  return <h3 className={clsx(style.title, props.className)}>{props.label}</h3>;
};
export default Title;
