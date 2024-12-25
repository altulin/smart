import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import { ITextInput } from "../utils/types";

const Label: FC<ITextInput> = ({ ...props }) => {
  const { modifier, label_text, id, children, className, ...input_props } =
    props;

  if (!input_props.name) return;

  return (
    <label
      className={clsx(
        style.label,
        modifier && style[`label--${modifier}`],
        className,
      )}
      htmlFor={id}
    >
      {label_text && (
        <span
          className={clsx(
            style.label__text,
            modifier && style[`label__text--${modifier}`],
            "underline",
          )}
        >
          {label_text}
        </span>
      )}

      <div className={clsx(style.input__wrapper)}>{children}</div>
    </label>
  );
};
export default Label;
