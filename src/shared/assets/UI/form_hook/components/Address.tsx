/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef } from "react";
import { AddressSuggestions } from "react-dadata";
import { ITextInput } from "../utils/types";
// import clsx from "clsx";
import { useController, useFormContext } from "react-hook-form";
import { stepTo } from "@/app/store/modal/modalSlice";
import { useAppDispatch } from "@/entities/hooks/hook";
import clsx from "clsx";
import useGetFieldData from "../hook/fieldData";

const Address: FC<ITextInput> = ({ ...props }) => {
  const { name } = props;
  const { register, setError } = useFormContext();
  const dispatch = useAppDispatch();
  const suggestionsRef = useRef<AddressSuggestions>(null);
  const {
    field: { onChange, value },
  } = useController({
    name,
  });
  const { isError } = useGetFieldData(name);

  useEffect(() => {
    if (!value) return;
    dispatch(stepTo({ add: { step: 1, data: value } }));

    if (suggestionsRef.current) {
      suggestionsRef.current.setInputValue("");
    }
  }, [dispatch, value]);

  const handleChange = (e: any) => {
    const {
      data: { house, stead },
    } = e;

    if (!house && !stead) {
      setError(name, {
        type: "manual",
        message: "Введите номер дома или участка",
      });
      return;
    } else {
      setError(name, {
        type: "manual",
        message: "",
      });
    }

    onChange(e.value);
  };

  return (
    <AddressSuggestions
      ref={suggestionsRef}
      token={import.meta.env.VITE_APP_DADATA}
      onChange={handleChange}
      minChars={2}
      delay={100}
      inputProps={{
        className: clsx(
          `px-4 py-3 outline-0 border border-gray-300 rounded-md text-xl font-normal color-black w-full transition hover:border-gray-500 focus:border-gray-500 duration-300 bg-white ${
            isError &&
            "border-red-500 hover:border-red-500 focus:border-red-500"
          }`,
        ),
        ...props,
        ...register(name),
      }}
      suggestionClassName={
        "py-2 px-4 text-xl duration-300 hover:bg-gray-100 w-full text-left"
      }
      suggestionsClassName={
        "flex flex-col mt-4 border border-gray-300 rounded-md items-start py-2  shadow-md"
      }
      // highlightClassName={"text-slate-900"}
    />
  );
};
export default Address;
