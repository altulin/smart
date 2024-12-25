/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useRef } from "react";
import { AddressSuggestions } from "react-dadata";
import style from "../Form.module.scss";
import { ITextInput } from "../utils/types";
import clsx from "clsx";
import { useController, useFormContext } from "react-hook-form";
import { stepTo } from "@/app/store/modal/modalSlice";
import { useAppDispatch } from "@/entities/hooks/hook";

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
        className: clsx(style.input),
        ...props,
        ...register(name),
      }}
      suggestionClassName={clsx(style.dadata__item)}
      suggestionsClassName={clsx(style.dadata__list)}
      highlightClassName={clsx(style.dadata__mark)}
    />
  );
};
export default Address;
