import { FC, useEffect } from "react";
import Modal from "../template/Modal";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addFields } from "../add/data";
import { clearAllStep } from "@/app/store/modal/modalSlice";
import { IGeoItem } from "@/app/store/geo/initialState";
import { editGeoItem } from "@/app/store/geo/modalSlice";
import { validateSchema } from "@/shared/assets/UI/form_hook/utils/validation/yupSchemaCreator";
import Field from "@/shared/assets/UI/form_hook/hoc/Field";
import { useAppDispatch, useAppSelector } from "@/entities/hooks/hook";
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

const ModalEdit: FC = () => {
  const dispatch = useAppDispatch();
  const form = useForm({
    defaultValues: {},
    resolver: yupResolver(validateSchema(addFields)),
    mode: "onChange",
  });

  const { modalState } = useAppSelector((state) => state.modal);
  const { geoArr } = useAppSelector((state) => state.geo);

  useEffect(() => {
    const item = geoArr.find((item) => item.id === modalState?.edit?.editId);
    form.reset(item);
  }, [form, geoArr, modalState?.edit?.editId]);

  const onSubmit: SubmitHandler<IGeoItem> = (data) => {
    dispatch(editGeoItem(data));
    form.reset();
    dispatch(clearAllStep());
  };

  return (
    <Modal>
      <DialogHeader>
        <DialogTitle>Редактирование маркера</DialogTitle>
      </DialogHeader>

      <Form {...form}>
        <form
          id="edit_form"
          className={clsx("flex flex-col gap-y-4")}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {addFields.map((field) => (
            <Field key={field.name} {...field} />
          ))}
        </form>
      </Form>

      <DialogFooter>
        <Button form="edit_form" type="submit">
          Сохранить
        </Button>
      </DialogFooter>
    </Modal>
  );
};
export default ModalEdit;
