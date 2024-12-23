import { ITextInput } from "@/UI/form_hook/utils/types";
import { required } from "@/UI/form_hook/utils/validation/errText";

export const addFields: ITextInput[] = [
  {
    name: "address",
    label_text: "Адрес",
    readOnly: true,
  },
  {
    name: "latitude",
    label_text: "Широта",
    readOnly: true,
  },
  {
    name: "longitude",
    label_text: "Долгота",
    readOnly: true,
  },
  {
    name: "label",
    label_text: "Наименование",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
  },
  {
    name: "description",
    label_text: "Описание",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
  },
  {
    type: "hidden",
    name: "id",
    hidden: true,
  },
];
