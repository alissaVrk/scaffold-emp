import { Meta, Story } from "@storybook/react";
import React from "react";

import { Header as RealHeader } from "../../components/Header";

export default {
  title: "Components/Header"
} as Meta;

export const Header: Story = () => {
  return <RealHeader></RealHeader>;
};
