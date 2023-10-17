import AsyncStorage from "@react-native-async-storage/async-storage";
import fonts from "@assets/fonts";
import { showMessage } from "react-native-flash-message";

// ****************************STORAGE FUNCTION ***************************************

export const storeData = async (key, value) => {
  try {
    var jsonValue = value;
    if (typeof value !== "string") {
      jsonValue = JSON.stringify(value);
    }
    await AsyncStorage.setItem(key, jsonValue);
  } catch (err) {
    return err;
  }
};

export const getData = async (key) => {
  try {
    const res = await AsyncStorage.getItem(key);
    return res != null
      ? typeof res !== "string"
        ? JSON.parse(res)
        : res
      : null;
  } catch (err) {
    return err;
  }
};

// ****************************FLASH_MESSAGE  FUNCTION ***************************************

export const showFlashMessage = (type, msg, icon) => {
  showMessage({
    message: msg,
    type: type,
    icon: icon,
    duration: 2500,
  });
};
