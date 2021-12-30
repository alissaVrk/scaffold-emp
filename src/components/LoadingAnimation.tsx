import React from "react";
import Lottie from "react-lottie-player";

import * as animationData from "../assets/animations/loader.json";

interface Props {
  className?: string;
}

export const LoadingAnimation = ({ className }: Props) => {
  return (
    <Lottie loop play animationData={animationData} className={className} />
  );
};
