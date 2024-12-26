import clsx from "clsx";
import { FC, useEffect } from "react";
import Modal from "../template/Modal";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { addFields } from "./data";
import { yupResolver } from "@hookform/resolvers/yup";
import { clearAllStep } from "@/app/store/modal/modalSlice";
import { addGeoItem } from "@/app/store/geo/modalSlice";
import { IGeoItem } from "@/app/store/geo/initialState";
import { useLazyGetGeoQuery } from "@/app/store/rtk/geo";
import Field from "@/shared/assets/UI/form_hook/hoc/Field";
import { validateSchema } from "@/shared/assets/UI/form_hook/utils/validation/yupSchemaCreator";
import { useAppDispatch, useAppSelector } from "@/entities/hooks/hook";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { makeInitialValues } from "@/shared/assets/UI/form_hook/utils/initialValues";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ModalAddMarker: FC = () => {
  const form = useForm({
    defaultValues: makeInitialValues(addFields),
    resolver: yupResolver(validateSchema(addFields)),
    mode: "onChange",
  });

  const { modalState } = useAppSelector((state) => state.modal);
  const [getGeo] = useLazyGetGeoQuery();

  useEffect(() => {
    if (!modalState?.add?.data) return;

    getGeo({ geocode: modalState?.add?.data })
      .unwrap()
      .then((res) => {
        form.reset({ ...res });
      });
  }, [form, getGeo, modalState?.add?.data]);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IGeoItem> = (data) => {
    dispatch(addGeoItem({ ...data, id: Math.floor(Math.random() * 100) + 1 }));
    form.reset();
    dispatch(clearAllStep());
  };

  return (
    <Modal>
      <DialogHeader>
        <DialogTitle>Добавить маркер</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form
          id="add_form"
          className={clsx("flex flex-col gap-y-4")}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {addFields.map((field) => (
            <Field key={field.name} {...field} />
          ))}
        </form>
      </Form>

      <DialogFooter>
        <Button form="add_form" type="submit">
          Добавить
        </Button>
      </DialogFooter>
    </Modal>
  );
};
export default ModalAddMarker;
