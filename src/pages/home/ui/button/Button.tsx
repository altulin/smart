import { FC } from "react";
import { IGeoItem } from "@/app/store/geo/initialState";

import { getCenter } from "@/app/store/geo/modalSlice";
import { useAppDispatch } from "@/entities/hooks/hook";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Button: FC<{ item: IGeoItem }> = ({ ...props }) => {
  const dispatch = useAppDispatch();
  const { item } = props;

  console.log(item);

  const handleClick = () => {
    dispatch(getCenter(item));
  };

  const notifications = [
    {
      title: "Адрес",
      description: item.address,
    },
    {
      title: "Широта",
      description: item.latitude,
    },
    {
      title: "Долгота",
      description: item.longitude,
    },
  ];

  return (
    <button type="button" onClick={handleClick} className="grow">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="line-clamp-1 text-left">{item.label}</CardTitle>
          {/* <CardDescription className="line-clamp-1 text-left">
            {item.description}
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          <div>
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="grid grid-cols-[25px_1fr] justify-items-start pb-4 text-left last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {notification.title}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </button>
  );
};
export default Button;
