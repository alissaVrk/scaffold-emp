import { Meta, Story } from "@storybook/react";

export default {
  title: "Foundation/Typography"
} as Meta;

export const Typography: Story = () => {
  return (
    <>
      <div className="flex flex-col gap-4 bg-plum-4 rounded p-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <div>
            <span className="text-label text-plum-64">text-h{i}</span>
            <p className={`text-h${i}`}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        ))}
      </div>
      <hr className="border-plum-16 mt-4 mb-4" />
      <div className="flex flex-col gap-4 bg-plum-4 rounded p-4">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div>
            <span className="text-label text-plum-64">text-e{i}</span>
            <p className={`text-e${i}`}>
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        ))}
      </div>
      <hr className="border-plum-16 mt-4 mb-4" />
      <div className="flex flex-col gap-4 bg-plum-4 rounded p-4">
        <div>
          <span className="text-label text-plum-64">text-body-large</span>
          <p className={"text-body-large"}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div>
          <span className="text-label text-plum-64">text-body-standard</span>
          <p className={"text-body-standard"}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div>
          <span className="text-label text-plum-64">text-body-small</span>
          <p className={"text-body-small"}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div>
          <span className="text-label text-plum-64">text-body-tiny</span>
          <p className={"text-body-tiny"}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
        <div>
          <span className="text-label text-plum-64">text-label</span>
          <p className={"text-label"}>
            The quick brown fox jumps over the lazy dog.
          </p>
        </div>
      </div>
    </>
  );
};
