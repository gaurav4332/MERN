import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import ButtonComp from "@components/ButtonComp";
import colors from "@styles/colors";
import TextInputComp from "@components/TextInputComp";
import { textScale, verticalScale } from "@styles/responsiveSize";
import WrapperContainer from "@components/Container/WrapperContainer";
import strings from "@constants/lang";
import HeaderComp from "@components/HeaderComp";
import fonts from "@assets/fonts";
import TextComp from "@components/TextComp";

const Login = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [secureText, setSecureText] = useState(true);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <WrapperContainer>
        <HeaderComp />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              flex: 1,
              padding: 16,
              justifyContent: "space-between",
            }}
          >
            <View>
              <TextComp
                style={styles.headingTextStyle}
                text={strings.WELCOME_BACK}
              />
              <TextComp
                style={styles.textStyle}
                text={strings.WE_ARE_HAPPY_TO_SEE}
              />
              <View style={{ marginTop: verticalScale(35) }}>
                <TextInputComp
                  value={data.email}
                  keyboardType="email-address"
                  placeholder={strings.EMAIL}
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
                  keyboardType="default"
                  placeholder={strings.PASSWORD}
                  inputStyle={styles.InputStyle}
                  secureTextEntry={secureText}
                  secureText={secureText ? strings.SHOW : strings.HIDE}
                  onPressSecure={() => setSecureText(!secureText)}
                  onChangeText={(txt) => {
                    setData({
                      ...data,
                      password: txt,
                    });
                  }}
                />
              </View>
              <Text style={styles.forgotText}>{strings.FORGOT_PASSWORD}</Text>
            </View>
            <ButtonComp
              btnText={strings.LOGIN}
              onClick={() => {
                console.log("Data   => ", data), navigation.navigate("Home");
              }}
            />
          </View>
        </TouchableWithoutFeedback>
      </WrapperContainer>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingTextStyle: {
    fontSize: textScale(28),
    fontFamily: fonts.BarlowBold,
    textAlign: "left",
  },
  textStyle: {
    fontSize: textScale(13),
    fontFamily: fonts.BarlowRegular,
    marginVertical: verticalScale(7),
    textAlign: "left",
  },
  forgotText: {
    fontSize: textScale(12),
    fontFamily: fonts.BarlowSemiBold,
    color: colors.blueColor,
    marginVertical: verticalScale(7),
    textAlign: "right",
  },
  InputStyle: {
    backgroundColor: colors.lightGrey,
  },
});
