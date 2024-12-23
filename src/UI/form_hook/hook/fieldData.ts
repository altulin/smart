import { useFormContext } from "react-hook-form";

const useGetFieldData = (name: string) => {
  const formContext = useFormContext();

  if (!formContext) return { isError: false, error_text: null };

  const {
    formState: { errors },
  } = formContext;

  const isError = errors[name] ? true : false;
  const error_text = errors[name] ? errors[name].message : null;

  return { isError, error_text };
};

export default useGetFieldData;
