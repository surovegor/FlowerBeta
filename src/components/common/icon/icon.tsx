import { FC } from "react";
import type { IconProps } from "./icon.d";

export const Icon: FC<IconProps> = ({
  name,
  className,
}): JSX.Element => {
  return (
    <svg className={className}>
      <use
        xlinkHref={`/sprites/icons.svg#${name}`}
      ></use>
    </svg>
  );
};
