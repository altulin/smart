/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import { AddressSuggestions } from "react-dadata";
import style from "../Form.module.scss";
import { ITextInput } from "../utils/types";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
// import { useLazyGetGeoQuery } from "@/store/rtk/geo";
import { useAppDispatch } from "@/hooks/hook";
import { stepTo } from "@/store/modal/modalSlice";

const Address: FC<ITextInput> = ({ ...props }) => {
  const { name } = props;
  const { register, setError } = useFormContext();
  // const [getGeo] = useLazyGetGeoQuery();
  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    const {
      data: { house, stead },
      value,
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

    dispatch(stepTo({ add: { step: 1, data: value } }));

    // getGeo({ geocode: value })
    //   .unwrap()
    //   .then(() => {
    //     // dispatch(stepTo({ add: { step: 1, data: value } }));
    //   });
  };

  return (
    <AddressSuggestions
      token={import.meta.env.VITE_APP_DADATA}
      onChange={handleChange}
      minChars={3}
      delay={500}
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
