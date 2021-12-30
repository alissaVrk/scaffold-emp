import { maskPhone } from "./maskPhone";

describe("maskPhone", () => {
  it("masks correctly for full number", () => {
    expect(maskPhone("2015550123").maskedNumber).toEqual("(201) 555-0123");
    expect(maskPhone("2015550123").phoneNumber).toEqual("2015550123");
  });

  it("masks partially", () => {
    expect(maskPhone("20155501").maskedNumber).toEqual("(201) 555-01");
    expect(maskPhone("20155501").phoneNumber).toEqual("20155501");
  });

  it("masks without dangling symbols", () => {
    expect(maskPhone("201555").maskedNumber).toEqual("(201) 555");
  });

  it("doesn't mask when empty", () => {
    expect(maskPhone("").maskedNumber).toEqual(undefined);
  });

  it("masks American numbers with +1", () => {
    expect(maskPhone("+12015550123").maskedNumber).toEqual("+1 (201) 555-0123");
    expect(maskPhone("+12015550123").phoneNumber).toEqual("+12015550123");
  });

  it("masks Israeli numbers with +972", () => {
    expect(maskPhone("+972501123456").maskedNumber).toEqual("+972 501-123456");
    expect(maskPhone("+972501123456").phoneNumber).toEqual("+972501123456");
  });

  it("masks crops the numbers to match mask", () => {
    expect(maskPhone("20155501234").maskedNumber).toEqual("(201) 555-0123");
    expect(maskPhone("20155501234").phoneNumber).toEqual("2015550123");
  });
});
