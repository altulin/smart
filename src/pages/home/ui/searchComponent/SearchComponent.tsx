import { FC } from "react";
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
      <form>
        <Field {...searchField}></Field>
      </form>
    </FormProvider>
  );
};
export default SearchComponent;
