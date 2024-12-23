import { FC, useEffect } from "react";
import Modal from "../template/Modal";
import clsx from "clsx";
import style from "../template/Modal.module.scss";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateSchema } from "@/UI/form_hook/utils/validation/yupSchemaCreator";
import { addFields } from "../add/data";
import Field from "@/UI/form_hook/hoc/Field";
import { clearAllStep } from "@/store/modal/modalSlice";
import { IGeoItem } from "@/store/geo/initialState";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { editGeoItem } from "@/store/geo/modalSlice";

const ModalEdit: FC = () => {
  const dispatch = useAppDispatch();
  const { ...methods } = useForm({
    defaultValues: {},
    resolver: yupResolver(validateSchema(addFields)),
    mode: "onChange",
  });
  const { reset, handleSubmit } = methods;
  const { modalState } = useAppSelector((state) => state.modal);
  const { geoArr } = useAppSelector((state) => state.geo);

  useEffect(() => {
    const item = geoArr.find((item) => item.id === modalState?.edit?.editId);
    reset(item);
  }, [geoArr, modalState?.edit?.editId, reset]);

  const onSubmit: SubmitHandler<IGeoItem> = (data) => {
    dispatch(editGeoItem(data));
    reset();
    dispatch(clearAllStep());
  };

  return (
    <Modal>
      <div className={clsx(style.modal__form)}>
        <h2 className={clsx(style.modal__title)}>Редактирование маркера</h2>
        <FormProvider {...methods}>
          <form
            className={clsx(style.modal__form)}
            onSubmit={handleSubmit(onSubmit)}
          >
            {addFields.map((field) => (
              <Field key={field.name} {...field} />
            ))}

            <button className={clsx(style.modal__button)} type="submit">
              Сохранить
            </button>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
};
export default ModalEdit;
