import clsx from "clsx";
import { FC } from "react";
import style from "../HomePage.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { searchField } from "./api";
import Field from "@/shared/assets/UI/form_hook/hoc/Field";

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
