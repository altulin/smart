import { IGeoItem } from "@/app/store/geo/initialState";
import { stepTo } from "@/app/store/modal/modalSlice";
import { useAppDispatch } from "@/entities/hooks/hook";
import { Placemark } from "@pbe/react-yandex-maps";
import { FC } from "react";

const PlacemarkComponent: FC<IGeoItem> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  let timer: number | NodeJS.Timeout;
  let click: number = 0;

  const handleOneClick = () => {
    dispatch(stepTo({ edit: { step: 1, editId: props.id } }));
  };

  const handleDoubleClick = () => {
    dispatch(stepTo({ del: { step: 1, delId: props.id } }));
  };

  const handleClick = () => {
    click++;
    if (click == 1) {
      timer = setTimeout(function () {
        handleOneClick();
        click = 0;
      }, 250);
    } else {
      clearTimeout(timer);
      timer = 0;
      handleDoubleClick();
      click = 0;
    }
  };

  return (
    <Placemark
      onClick={() => handleClick()}
      geometry={[props.latitude, props.longitude]}
    ></Placemark>
  );
};
export default PlacemarkComponent;
