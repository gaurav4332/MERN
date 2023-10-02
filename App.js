import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "@features/Home /Home";
import Login from "@features/Login/Login";
import Routes from "@navigation/Routes";
import { Provider } from "react-redux";
import store from "@redux/store";
const { dispatch } = store;

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
