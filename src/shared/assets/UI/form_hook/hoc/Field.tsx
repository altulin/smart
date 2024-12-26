/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useId } from "react";
import {
  Controller,
  useController,
  useForm,
  useFormContext,
} from "react-hook-form";
import { checkArr } from "@/entities/lib/checkArr";
import { isComponent } from "@/entities/lib/checkComponent";
import { ITextInput } from "../utils/types";
// import Input from "../components/Input";
import Container from "./Container";
import Label from "./Label";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Content: FC<ITextInput> = ({ component: Component, ...props }) => {
  const { validation_type, validations, ...labelProps } = props;
  const { label_text, ...inputProps } = labelProps;
  const { field } = useController({ name: props.name });

  return (
    <>
      {!isComponent(Component) ? (
        <Input {...inputProps} {...field} />
      ) : (
        <Component {...inputProps} />
      )}
    </>
  );
};

const Field: FC<ITextInput> = ({ component: Component, ...props }) => {
  const form = useForm();
  const id = useId();

  const { validation_type, validations, ...labelProps } = props;
  const { label_text, ...inputProps } = labelProps;

  inputProps.id = id;

  return (
    <FormField
      control={form.control}
      name={props.name}
      render={(field) => {
        // console.log(field);

        return (
          <FormItem>
            <FormLabel>{label_text}</FormLabel>
            <FormControl>
              <Content {...inputProps} component={Component} />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />

    // <Container {...props}>
    //   {checkArr(props.radio_list) ? (
    //     <>{isComponent(Component) && <Component {...props} />}</>
    //   ) : (
    //     <Label {...labelProps} id={id}>
    //       {methods ? (
    //         <Controller
    //           control={methods.control}
    //           name={props.name}
    //           render={() => {
    //             return <Content {...inputProps} component={Component} />;
    //           }}
    //         ></Controller>
    //       ) : (
    //         <Content {...inputProps} component={Component} />
    //       )}
    //     </Label>
    //   )}
    // </Container>
  );
};
export default Field;
