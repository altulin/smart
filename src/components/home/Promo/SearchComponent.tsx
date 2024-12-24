import clsx from "clsx";
import { FC } from "react";
import style from "./Promo.module.scss";
import Field from "@/UI/form_hook/hoc/Field";
import { FormProvider, useForm } from "react-hook-form";
import { searchField } from "./data";

const SearchComponent: FC = () => {
  const { ...methods } = useForm({
    defaultValues: { search: "" },
    mode: "onChange",
  });

  // const {} = methods;

  return (
    <FormProvider {...methods}>
      <form className={clsx(style.search)}>
        <Field {...searchField}></Field>
      </form>
    </FormProvider>
  );
};
export default SearchComponent;
