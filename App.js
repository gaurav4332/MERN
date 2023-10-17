import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Home from "@features/Home /Home";
import Login from "@features/Login/Login";
import Routes from "@navigation/Routes";
import { Provider } from "react-redux";
import store from "@redux/store";
import { changeAppLanguage, changeAppTheme } from "@redux/actions/appSettings";
import strings from "@constants/lang";
import { getData } from "@utils/helperFunctions";
import { STORAGE_KEYS } from "@constants/constant";
import FlashMessage from "react-native-flash-message";
const { dispatch } = store;

const App = () => {
  useEffect(() => {
    AppTheme();
    AppLang();
  }, []);
  const AppLang = async () => {
    try {
      let myLang = await getData(STORAGE_KEYS.APP_LANGUAGE);
      if (!!myLang) {
        changeAppLanguage(myLang);
      }
    } catch (error) {
      console.log("No language Data Found ", error);
    }
  };
  const AppTheme = async () => {
    try {
      let myTheme = await getData(STORAGE_KEYS.APP_THREME);
      if (!!myTheme) {
        changeAppTheme(myTheme);
      }
    } catch (error) {
      console.log("No theme Data Found ", error);
    }
  };
  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
