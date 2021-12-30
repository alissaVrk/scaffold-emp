import cx from "classnames";
import React from "react";

import { ReactComponent as BackIcon } from "../assets/icons/back-chevron.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close-x.svg";

const icons = {
  back: BackIcon,
  close: CloseIcon
};

export type IconType = keyof typeof icons;
export const allIconNames = () => Object.keys(icons);

interface IconProps {
  name: IconType;
  className?: string;
  onClick?: () => void;
}

export const Icon: React.FC<IconProps> = ({ name, className, onClick, ...rest }) => {
  const IconComponent = icons[name];
  return (
    <div {...rest} className={cx({ "relative hitSlop": !!onClick })} onClick={onClick}>
      <IconComponent className={cx("stroke-current", className)} />
    </div>
  );
};
