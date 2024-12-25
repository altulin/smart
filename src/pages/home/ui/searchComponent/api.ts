import Address from "@/shared/assets/UI/form_hook/components/Address";
import { ITextInput } from "@/shared/assets/UI/form_hook/utils/types";

export const searchField: ITextInput = {
  name: "search",
  component: Address,
  label_text: "Поиск",
  placeholder: "Начните вводить адрес",
  modifier: "search",
};
