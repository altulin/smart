import clsx from "clsx";
import { FC, useEffect } from "react";
import Modal from "../template/Modal";
import style from "../template/Modal.module.scss";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import Field from "@/UI/form_hook/hoc/Field";
import { addFields } from "./data";
import { yupResolver } from "@hookform/resolvers/yup";
import { validateSchema } from "@/UI/form_hook/utils/validation/yupSchemaCreator";
import { useAppDispatch, useAppSelector } from "@/hooks/hook";
import { clearAllStep } from "@/store/modal/modalSlice";
import { addGeoItem } from "@/store/geo/modalSlice";
import { IGeoItem } from "@/store/geo/initialState";
import { useLazyGetGeoQuery } from "@/store/rtk/geo";

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
