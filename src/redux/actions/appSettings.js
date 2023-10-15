import { changeLang, changeTheme } from "@redux/reducers/appSettings";
import { saveUserData } from "../reducers/auth";
import store from "../store";
import types from "../types";
import strings from "@constants/lang";
import { storeData } from "@utils/helperFunctions";
const { dispatch } = store;

export const changeLanguage = (data) => {
  
  storeData("language", data)
  .then((res) => {
    strings.setLanguage(data);
    dispatch(changeLang(data));
  })
  .catch((err) => {
    console.log("error during store Language data", err);
  });
};

export const changeAppTheme = (data) => {
  storeData("theme", data)
    .then((res) => {
      dispatch(changeTheme(data));
    })
    .catch((err) => {
      console.log("error during store theme data", err);
    });
};
