import { FC, InputHTMLAttributes } from "react";
import useGetFieldData from "../hook/fieldData";

interface IContainer extends InputHTMLAttributes<HTMLInputElement> {
  label_text?: string;
  modifier?: string | null;
}

const Container: FC<IContainer> = ({ ...props }) => {
  const { children = null } = props;
  const { isError, error_text } = useGetFieldData(props.name!);

  return (
    <div className="w-full">
      {children}

      {isError && (
        <div className="mt-1">
          <span className="pl-4 text-sm text-red-600">
            {typeof error_text === "string" ? error_text : null}
          </span>
        </div>
      )}
    </div>
  );
};
export default Container;
