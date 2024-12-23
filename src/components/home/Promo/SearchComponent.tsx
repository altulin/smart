import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import Field from "@/UI/form_hook/hoc/Field";
import { FormProvider, useForm } from "react-hook-form";
import { searchField } from "./data";

// import { useAppDispatch } from "@/hooks/hook";
// import { stepTo } from "@/store/modal/modalSlice";
// import { useLazyGetGeoQuery } from "@/store/rtk/geo";

const SearchComponent: FC = () => {
  // const dispatch = useAppDispatch();
  const { ...methods } = useForm({
    defaultValues: { search: "" },
  });

  // const [getGeo] = useLazyGetGeoQuery();

  // useEffect(() => {
  //   // dispatch(stepTo({ add: { step: 1 } }));
  //   console.log(methods);
  // }, []);

  // const {
  //   //   // reset,
  //   //   // handleSubmit,
  //   //   // formState: { isSubmitSuccessful },
  //   getValues,
  // } = methods;

  // useEffect(() => {
  //   const value = getValues("search");
  //   // if (!value) return;
  //   console.log(value);
  //   // getGeo({ geocode: value });
  // }, [getValues]);

  return (
    <FormProvider {...methods}>
      <form className={clsx(style.search)}>
        <Field {...searchField}></Field>
      </form>
    </FormProvider>
  );
};
export default SearchComponent;
