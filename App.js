import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Home from "@features/Home /Home";
import Login from "@features/Login/Login";
import Routes from "@navigation/Routes";
import { Provider } from "react-redux";
import store from "@redux/store";
import { changeAppTheme, changeLanguage } from "@redux/actions/appSettings";
import strings from "@constants/lang";
import { getData } from "@utils/helperFunctions";
const { dispatch } = store;

const App = () => {
  useEffect(() => {
    AppTheme();
    AppLang();
  }, []);
  const AppLang = async () => {
    try {
      let myLang = await getData("language");
      console.log(myLang);
      if (!!myLang) {
        changeLanguage(myLang);
      }
    } catch (error) {
      console.log("No language Data Found ", error);
    }
  };
  const AppTheme = async () => {
    try {
      let myTheme = await getData("theme");
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
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
