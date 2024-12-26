/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef } from "react";
import { AddressSuggestions } from "react-dadata";
import { ITextInput } from "../utils/types";
import { useController, useFormContext } from "react-hook-form";
import { stepTo } from "@/app/store/modal/modalSlice";
import { useAppDispatch } from "@/entities/hooks/hook";
import { Input } from "@/components/ui/input";

const Address: FC<ITextInput> = ({ ...props }) => {
  const { name } = props;
  const { setError } = useFormContext();
  const dispatch = useAppDispatch();
  const suggestionsRef = useRef<AddressSuggestions>(null);
  const {
    field: { onChange, value },
  } = useController({
    name,
  });

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
        ...props,
      }}
      customInput={Input}
      suggestionClassName={
        "py-2 px-4 text-xl duration-300 hover:bg-gray-100 w-full text-left"
      }
      suggestionsClassName={
        "flex flex-col mt-4 border border-gray-300 rounded-md items-start py-2  shadow-md"
      }
    />
  );
};
export default Address;
