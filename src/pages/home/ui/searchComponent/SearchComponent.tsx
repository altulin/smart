import { FC } from "react";
import { useForm } from "react-hook-form";
import { searchField } from "./api";
import Field from "@/shared/assets/UI/form_hook/hoc/Field";
import { Form } from "@/components/ui/form";

const SearchComponent: FC = () => {
  const form = useForm({
    defaultValues: { search: "" },
    mode: "onChange",
  });

  return (
    <Form {...form}>
      <form>
        <Field {...searchField}></Field>
      </form>
    </Form>
  );
};
export default SearchComponent;
