import clsx from "clsx";
import { FC, useEffect } from "react";
import Modal from "../template/Modal";
import style from "../template/Modal.module.scss";
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

const ModalAddMarker: FC = () => {
  const { ...methods } = useForm({
    defaultValues: {},
    resolver: yupResolver(validateSchema(addFields)),
    mode: "onChange",
  });
  const { reset, handleSubmit } = methods;
  const { modalState } = useAppSelector((state) => state.modal);
  const [getGeo] = useLazyGetGeoQuery();

  useEffect(() => {
    getGeo({ geocode: modalState?.add?.data })
      .unwrap()
      .then((res) => {
        reset({ ...res });
      });
  }, [getGeo, modalState?.add?.data, reset]);

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IGeoItem> = (data) => {
    dispatch(addGeoItem({ ...data, id: Math.floor(Math.random() * 100) + 1 }));
    reset();
    dispatch(clearAllStep());
  };

  return (
    <Modal>
      <div className={clsx(style.modal__form)}>
        <h2 className={clsx(style.modal__title)}>Добавить маркер</h2>

        <FormProvider {...methods}>
          <form
            className={clsx(style.modal__form)}
            onSubmit={handleSubmit(onSubmit)}
          >
            {addFields.map((field) => (
              <Field key={field.name} {...field} />
            ))}

            <button className={clsx(style.modal__button)} type="submit">
              Добавить
            </button>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
};
export default ModalAddMarker;
