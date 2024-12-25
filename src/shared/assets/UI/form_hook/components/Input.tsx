import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import { useFormContext } from "react-hook-form";
import useGetFieldData from "../hook/fieldData";
import { ITextInput } from "../utils/types";

const Input: FC<ITextInput> = ({ modifier, ...props }) => {
  const { register } = useFormContext();
  const { isError } = useGetFieldData(props.name);

  return (
    <input
      className={clsx(
        style.input,
        modifier && style[`input--${modifier}`],
        isError && style[`input--error`],
      )}
      id={props.id}
      {...props}
      {...register(props.name)}
    />
  );
};
export default Input;
