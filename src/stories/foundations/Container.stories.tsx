import { Meta, Story } from "@storybook/react";

export default {
  title: "Foundation/Container"
} as Meta;

export const Container: Story = () => {
  return (
    <div className="bg-plum-40 min-h-screen">
      <div className="container bg-white min-h-screen p-4 flex flex-col">
        <div className="text-label text-plum-64 p-2 rounded bg-plum-8 self-center">
          container
        </div>
      </div>
    </div>
  );
};
