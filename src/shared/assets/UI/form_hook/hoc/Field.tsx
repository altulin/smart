/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useId } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { checkArr } from "@/entities/lib/checkArr";
import { isComponent } from "@/entities/lib/checkComponent";
import { ITextInput } from "../utils/types";
import Input from "../components/Input";
import Container from "./Container";
import Label from "./Label";

const Content: FC<ITextInput> = ({ component: Component, ...props }) => {
  const { validation_type, validations, ...labelProps } = props;
  const { label_text, ...inputProps } = labelProps;

  return (
    <>
      {!isComponent(Component) ? (
        <Input {...inputProps} />
      ) : (
        <Component {...inputProps} />
      )}
    </>
  );
};

const Field: FC<ITextInput> = ({ component: Component, ...props }) => {
  const id = useId();
  const methods = useFormContext();

  const { validation_type, validations, ...labelProps } = props;
  const { label_text, ...inputProps } = labelProps;

  inputProps.id = id;

  return (
    <Container {...props}>
      {checkArr(props.radio_list) ? (
        <>{isComponent(Component) && <Component {...props} />}</>
      ) : (
        <Label {...labelProps} id={id}>
          {methods ? (
            <Controller
              control={methods.control}
              name={props.name}
              render={() => {
                return <Content {...inputProps} component={Component} />;
              }}
            ></Controller>
          ) : (
            <Content {...inputProps} component={Component} />
          )}
        </Label>
      )}
    </Container>
  );
};
export default Field;
