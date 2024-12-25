// import clsx from "clsx";
import { FC } from "react";
import { ITextInput } from "../utils/types";
import clsx from "clsx";

const Label: FC<ITextInput> = ({ modifier, ...props }) => {
  const { label_text, id, children, className, ...input_props } = props;

  if (!input_props.name) return;

  return (
    <label
      htmlFor={id}
      className={clsx(`flex w-full flex-col gap-4 ${className}`)}
    >
      {label_text && (
        <span className={clsx(modifier !== "search" ? "text-2xl" : "text-3xl")}>
          {label_text}
        </span>
      )}
      <div className="relative">{children}</div>
    </label>
  );
};
export default Label;
