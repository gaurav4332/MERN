import strings from "@constants/lang";
import validator from "is_js";

const checkEmpty = (val, key) => {
  if (validator.empty(val.trim())) {
    return strings.PLEASE_ENTER + " " + key;
  } else {
    return "";
  }
};
const checkMinLength = (val, minLength, key) => {
  if (val.trim().length < minLength) {
    return strings.PLEASE_ENTER_VALID + " " + key;
  } else {
    return "";
  }
};

const passwordValidation = (password) => {
  var re =
    /^(?=.*\d)(?=.*[><?@+'`~^%&\*\[\]\{\}.!#|\\\"$';,:;=/\(\),\-+])(?=.*[a-z]).{6,}$/;
  return re.test(password);
};

export default function (data) {
  const { email, password } = data;

  if (email !== undefined) {
    let emptyValidationText = checkEmpty(email, "email");
    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else {
      if (!validator.email(email)) {
        return strings.PLEASE_ENTER_VALID + " email";
      }
    }
  }

  if (password !== undefined) {
    let emptyValidationText = checkEmpty(password, "password");

    let minLenghtValidation = checkMinLength(password, 6, "password");
    if (emptyValidationText !== "") {
      return emptyValidationText;
    } else if (minLenghtValidation !== "") {
      return minLenghtValidation;
    } else {
      let isValidPasswd = passwordValidation(data.password);
      if (!isValidPasswd) {
        return strings.PLEASE_ENTER_VALID + " " + "password";
      }
    }
  }
}
