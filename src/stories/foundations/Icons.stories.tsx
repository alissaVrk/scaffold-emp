import { Meta, Story } from "@storybook/react";

import { allIconNames, Icon, IconType } from "../../components";

export default {
  title: "Foundation/Icons"
} as Meta;

export const Icons: Story = () => {
  return (
    <>
      {allIconNames().map((name) => (
        <IconBlock name={name as IconType} key={name} />
      ))}
    </>
  );
};

const IconBlock = ({ name }: { name: IconType }) => (
  <div className="mb-4 mr-4">
    <div className="text-label text-plum-40">{name}</div>
    <Icon name={name} />
  </div>
);
