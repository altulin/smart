import { FC } from "react";
import { IGeoItem } from "@/app/store/geo/initialState";

import { getCenter } from "@/app/store/geo/modalSlice";
import { useAppDispatch } from "@/entities/hooks/hook";

const Button: FC<{ item: IGeoItem }> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const { item } = props;

  const handleClick = () => {
    dispatch(getCenter(item));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="hover:opacity-2xl flex grow cursor-pointer flex-col gap-y-2 rounded-2xl bg-[#c4d1d7] p-4 duration-300"
    >
      <h3 className="w-full overflow-hidden text-ellipsis text-center text-2xl uppercase">
        {item.label}
      </h3>
      <p className="w-full overflow-hidden text-ellipsis text-left text-xl">
        {item.address}
      </p>
      <ul className="mt-auto flex w-full flex-col gap-y-2">
        <li className="flex justify-between gap-x-2 text-sm">
          <span>широта:</span>
          <span>{item.latitude}</span>
        </li>
        <li className="flex justify-between gap-x-2 text-sm">
          <span>долгота:</span>
          <span>{item.longitude}</span>
        </li>
      </ul>
    </button>
  );
};
export default Button;
