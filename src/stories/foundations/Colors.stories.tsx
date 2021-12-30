import { Meta, Story } from "@storybook/react";
import cx from "classnames";

export default {
  title: "Foundation/Colors"
} as Meta;

export const Colors: Story = () => {
  return (
    <>
      <div className="grid grid-flow-col justify-start gap-4 mb-4">
        <ColorBlock className="bg-plum" dark />
        <ColorBlock className="bg-plum-80" dark />
        <ColorBlock className="bg-plum-64" dark />
        <ColorBlock className="bg-plum-40" dark />
        <ColorBlock className="bg-plum-16" />
        <ColorBlock className="bg-plum-8" />
        <ColorBlock className="bg-plum-4" />
        <ColorBlock className="bg-plum-2" />
      </div>
      <div className="grid grid-flow-col justify-start gap-4 mb-4">
        <ColorBlock className="bg-beige" />
        <ColorBlock className="bg-beige-64" />
        <ColorBlock className="bg-beige-dark" />
        <ColorBlock className="bg-white" />
        <ColorBlock className="bg-white-transparent" />
        <ColorBlock className="bg-highlight" />
      </div>
      <div className="grid grid-flow-col justify-start gap-4 mb-4">
        <ColorBlock className="bg-apricot" />
        <ColorBlock className="bg-corn" />
        <ColorBlock className="bg-frost" />
        <ColorBlock className="bg-lavender" />
        <ColorBlock className="bg-mint" />
        <ColorBlock className="bg-mist" />
        <ColorBlock className="bg-rose" />
        <ColorBlock className="bg-sand" />
      </div>
      <div className="grid grid-flow-col justify-start gap-4 mb-4">
        <ColorBlock dark className="bg-forrest" />
        <ColorBlock dark className="bg-aubergine" />
        <ColorBlock dark className="bg-earth" />
        <ColorBlock dark className="bg-grass" />
        <ColorBlock dark className="bg-ocean" />
        <ColorBlock dark className="bg-orange" />
        <ColorBlock dark className="bg-raspberry" />
        <ColorBlock dark className="bg-sky" />
      </div>
    </>
  );
};

const ColorBlock = ({
  className,
  dark
}: {
  className: string;
  dark?: boolean;
}) => (
  <div
    className={cx("w-30 h-20 rounded-lg p-2 text-label", className, {
      "text-white": dark,
      "text-plum-64": !dark
    })}
  >
    {className}
  </div>
);
