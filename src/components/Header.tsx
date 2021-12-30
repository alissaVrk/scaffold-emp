import React from "react";

import logo from "../assets/images/empathy-logo.svg";
import { Icon } from "./Icon";

interface Props {
  onBack?: () => void;
  onClose?: () => void;
}

export function Header({ onBack, onClose }: Props) {
  return (
    <div className="container pt-14 pb-7 px-8 flex justify-between">
      {onBack && <Icon data-testid="back" name="back" className="text-plum-40" onClick={onBack} />}
      <div className="flex-1" />
      <img src={logo} alt="Empathy Logo" className="w-[100px] self-center" />
      <div className="flex-1" />
      {onClose && (
        <Icon data-testid="close" name="close" className="text-plum-40" onClick={onClose} />
      )}
    </div>
  );
}
