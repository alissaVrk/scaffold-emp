import { convertPhoneToE164, isPhoneValid } from "./phoneUtils";

describe("phoneUtils", () => {
  describe("Validation", () => {
    it("Should be valid for us number", () => {
      expect(isPhoneValid("2015550123")).toBeTruthy();
    });
    it("Should be valid for a formatted us number", () => {
      expect(isPhoneValid("(201) 555-0123")).toBeTruthy();
    });

    it("Should be valid for us number with +1", () => {
      expect(isPhoneValid("+1 201 5550123")).toBeTruthy();
    });

    it("Should be valid for IL number only with extension", () => {
      expect(isPhoneValid("+972 501 123456")).toBeTruthy();
    });

    it("Should fail for empty string", () => {
      expect(isPhoneValid("")).toBeFalsy();
    });

    it("Should fail for invalid number", () => {
      expect(isPhoneValid("201555012")).toBeFalsy();
      expect(isPhoneValid("20155501")).toBeFalsy();
      expect(isPhoneValid("2015550A")).toBeFalsy();
      expect(isPhoneValid("2")).toBeFalsy();
    });
  });

  describe("Conversion to E164", () => {
    it("Converts a local US number to E164", () => {
      expect(convertPhoneToE164("(202) 987-1234")).toEqual("+12029871234");
    });

    it("Converts an international US number to E164", () => {
      expect(convertPhoneToE164("+1 (202) 789-4321")).toEqual("+12027894321");
    });

    it("Converts an international IL number to E164", () => {
      expect(convertPhoneToE164("+972 507-987404")).toEqual("+972507987404");
    });

    it("Gracefully converts an invalid, partial local number to E164", () => {
      expect(convertPhoneToE164("(202) 987-1")).toEqual("+12029871");
    });
  });
});
