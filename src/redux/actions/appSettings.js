import { changeLang, changeTheme } from "@redux/reducers/appSettings";
import store from "../store";
import strings from "@constants/lang";
import { storeData } from "@utils/helperFunctions";
import { STORAGE_KEYS } from "@constants/constant";
const { dispatch } = store;

export const changeAppLanguage = (data) => {
  
  storeData(STORAGE_KEYS.APP_LANGUAGE, data)
  .then((res) => {
    strings.setLanguage(data);
    dispatch(changeLang(data));
  })
  .catch((err) => {
    console.log("error during store Language data", err);
  });
};

export const changeAppTheme = (data) => {
  storeData(STORAGE_KEYS.APP_THREME, data)
    .then((res) => {
      dispatch(changeTheme(data));
    })
    .catch((err) => {
      console.log("error during store theme data", err);
    });
};
