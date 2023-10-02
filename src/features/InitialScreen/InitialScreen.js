import { StyleSheet, Text, View } from "react-native";
import React from "react";
import navigationStrings from "@navigation/navigationStrings";
import ButtonComp from "@components/ButtonComp";
import { moderateScale, width } from "styles/responsiveSize";
import store from "@redux/store";
import { saveUserData } from "@redux/reducers/auth";
const {dispatch} = store;

const InitialScreen = ({ navigation }) => {
  const onLogin = () => {
    dispatch(saveUserData({ isLogin: true }));
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => navigation.navigate(navigationStrings.HOME)}>
        InitialScreen
      </Text>
      <ButtonComp
        btnText="Login"
        btnStyle={{
          width: "100%",
        }}
        onClick={onLogin}
      />
    </View>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({});
