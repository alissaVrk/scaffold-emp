import libPhoneNumber, {
  PhoneNumberFormat,
  PhoneNumberUtil
} from "google-libphonenumber";

const DEFAULT_REGION = "US";

const phoneUtil = libPhoneNumber.PhoneNumberUtil.getInstance();

const regionForNumber = (phoneNumber: string) => {
  try {
    return (
      phoneUtil.getRegionCodeForNumber(phoneUtil.parse(phoneNumber)) ||
      DEFAULT_REGION
    );
  } catch {
    return DEFAULT_REGION;
  }
};

export const parseRegionalNumber = (rawPhoneNumber: string) => {
  const region = regionForNumber(rawPhoneNumber);
  const phoneNumber = phoneUtil.parse(rawPhoneNumber, region);

  return {
    phoneNumber,
    region
  };
};

/**
 * We consider all numbers in US area codes 960-969 (+19600000000 through +19699999999) as test numbers,
 * as these area codes are not assignable.
 * See: https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Summary_table
 */
export const isTestNumber = (
  phoneNumberOrString: libphonenumber.PhoneNumber | string
): boolean => {
  const phoneNumber: libphonenumber.PhoneNumber =
    typeof phoneNumberOrString === "string"
      ? parseRegionalNumber(phoneNumberOrString).phoneNumber
      : phoneNumberOrString;

  return /^\+196[0-9]{8}$/.test(
    phoneUtil.format(phoneNumber, PhoneNumberFormat.E164)
  );
};

export const isPhoneValid = (rawPhoneNumber: string) => {
  try {
    const { phoneNumber, region } = parseRegionalNumber(rawPhoneNumber);

    return phoneUtil.isValidNumberForRegion(phoneNumber, region);
  } catch {
    return false;
  }
};

// E-164 is a format where phone is prefixed by '+', followed by the country code
// and local number without any spaces or other special characters.
// https://www.twilio.com/docs/glossary/what-e164
export const convertPhoneToE164 = (rawPhoneNumber: string) => {
  const { phoneNumber } = parseRegionalNumber(rawPhoneNumber);

  return phoneUtil.format(phoneNumber, PhoneNumberFormat.E164);
};

export const formatPhoneNumber = (rawPhoneNumber: string) => {
  const { phoneNumber } = parseRegionalNumber(rawPhoneNumber);
  return phoneUtil.format(phoneNumber, PhoneNumberFormat.NATIONAL);
};

export const isNumbersMatch = (
  numberA: string | undefined,
  numberB: string | undefined
) => {
  if (!numberA || !numberB) {
    return false;
  }
  return [
    PhoneNumberUtil.MatchType.EXACT_MATCH,
    PhoneNumberUtil.MatchType.NSN_MATCH,
    PhoneNumberUtil.MatchType.SHORT_NSN_MATCH
  ].includes(phoneUtil.isNumberMatch(numberA, numberB));
};
