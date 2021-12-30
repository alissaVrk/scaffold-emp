import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LoginPhoneView } from "./LoginPhoneView";

function submitPhoneNumber(rendered: RenderResult, phoneNumber: string) {
  const inputField = rendered.getByTestId("phone-input");
  userEvent.type(inputField, phoneNumber);
  const btn = rendered.getByTestId("submit-button");
  userEvent.click(btn);
}

describe("LoginPhoneScreen", () => {
  it("should call onSubmit with the phone number and country prefix", () => {
    const handleSubmit = jest.fn();

    const rendered = render(
      <LoginPhoneView onSubmit={handleSubmit} initialValue="" />
    );

    submitPhoneNumber(rendered, "9691234567");

    expect(handleSubmit).toHaveBeenCalledWith("+19691234567");
  });

  it("should call onSubmit with the phone number", () => {
    const handleSubmit = jest.fn();

    const rendered = render(
      <LoginPhoneView onSubmit={handleSubmit} initialValue="" />
    );

    submitPhoneNumber(rendered, "+19691234567");

    expect(handleSubmit).toHaveBeenCalledWith("+19691234567");
  });

  it("should show error when invalid phone number", () => {
    const handleSubmit = jest.fn();

    const rendered = render(
      <LoginPhoneView onSubmit={handleSubmit} initialValue="" />
    );
    expect(rendered.queryByText("Invalid phone number")).toBeNull();

    submitPhoneNumber(rendered, "12345679");

    expect(rendered.queryByText("Invalid phone number")).toBeTruthy();
    expect(handleSubmit).not.toBeCalled();
  });

  it("should remove error when user starts typing again", () => {
    const handleSubmit = jest.fn();
    const rendered = render(
      <LoginPhoneView onSubmit={handleSubmit} initialValue="" />
    );

    submitPhoneNumber(rendered, "12345679");

    expect(rendered.queryByText("Invalid phone number")).toBeTruthy();

    const inputField = rendered.getByTestId("phone-input");
    userEvent.type(inputField, "234");

    expect(rendered.queryByText("Invalid phone number")).toBeNull();
  });
});
