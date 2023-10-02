import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import ButtonComp from "@components/ButtonComp";
import colors from "@styles/colors";
import TextInputComp from "@components/TextInputComp";
import { textScale, verticalScale } from "@styles/responsiveSize";

const Login = ({navigation}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              //   backgroundColor: "cyan",
              padding: 16,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={styles.textStyle}>Login</Text>

              <TextInputComp
                value={data.email}
                keyboardType="email-address"
                placeholder="Enter Email"
                inputStyle={styles.InputStyle}
                onChangeText={(txt) => {
                  setData({
                    ...data,
                    email: txt,
                  });
                }}
              />
              <TextInputComp
                value={data.password}
                // keyboardType=""
                placeholder="Enter Password"
                inputStyle={styles.InputStyle}
                onChangeText={(txt) => {
                  setData({
                    ...data,
                    password: txt,
                  });
                }}
              />
            </View>
            <ButtonComp
              btnText="Done"
              btnStyle={{
                backgroundColor: "green",
              }}
              textStyle={{ color: colors.black }}
              onClick={() => {console.log("Data   => ", data),navigation.navigate('Home')}}
            />
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    alignSelf: "center",
    fontSize: textScale(30),
    fontWeight: "500",
    paddingVertical: verticalScale(30),
  },
  InputStyle: {
    marginTop: verticalScale(15),
    backgroundColor: colors.lightGrey,
  },
});
