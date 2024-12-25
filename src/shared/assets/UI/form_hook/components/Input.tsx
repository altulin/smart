import clsx from "clsx";
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import useGetFieldData from "../hook/fieldData";
import { ITextInput } from "../utils/types";

const Input: FC<ITextInput> = ({ ...props }) => {
  const { register } = useFormContext();
  const { isError } = useGetFieldData(props.name);

  return (
    <input
      className={
        clsx(
          `color-black w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-xl font-normal outline-0 transition duration-300 hover:border-gray-500 focus:border-gray-500 ${
            isError &&
            "border-red-500 hover:border-red-500 focus:border-red-500"
          }`,
        )

        // modifier && [`input--${modifier}`],
        // isError && style[`input--error`],
      }
      id={props.id}
      {...props}
      {...register(props.name)}
    />
  );
};
export default Input;
