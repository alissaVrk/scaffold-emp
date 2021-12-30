const masks = {
  us: "(XXX) XXX-XXXX",
  usWithCountryCode: "XX (XXX) XXX-XXXX",
  ilWithCountryCode: "XXXX XXX-XXXXXX"
};

const chooseMask = (value: string) => {
  if (value.startsWith("+972")) {
    return masks.ilWithCountryCode;
  }
  if (value.startsWith("+1")) {
    return masks.usWithCountryCode;
  }
  if (value.startsWith("+")) {
    return masks.usWithCountryCode;
  }
  return masks.us;
};

export const stripNumbers = (value: string) => {
  return value.replace(/[^\d+]/g, "");
};

export const maskPhone = (value: string) => {
  const strippedNumbers = stripNumbers(value);
  if (strippedNumbers.length === 0) {
    return {
      maskedNumber: undefined,
      phoneNumber: strippedNumbers
    };
  }

  let phoneNumber = chooseMask(strippedNumbers);
  for (let index = 0; index < strippedNumbers.length; index += 1) {
    phoneNumber = phoneNumber.replace("X", strippedNumbers[index]);
  }

  let numberPointer = 0;
  for (let index = phoneNumber.length; index > 0; index -= 1) {
    if (phoneNumber[index] && /\d/.exec(phoneNumber[index])) {
      numberPointer = index;
      break;
    }
  }
  phoneNumber = phoneNumber.slice(0, numberPointer + 1);
  return {
    maskedNumber: phoneNumber,
    phoneNumber: stripNumbers(phoneNumber)
  };
};
