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

const Signup = ({ navigation }) => {
  const [data, setData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [secureText, setSecureText] = useState(true);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <WrapperContainer>
          <HeaderComp />
          <View
            style={{
              flex: 1,
              padding: 16,
              justifyContent: "space-between",
            }}
          >
            <View >
              <TextComp style={styles.headingTextStyle} text= {strings.CREATE_NEW_ACCOUNT}/>
              <TextComp style={styles.textStyle} text= {strings.CREATE_AN_ACCOUNT_SO_YOU_CAN_CONTINUE}/>
              <View style={{ marginTop: verticalScale(35) }}>
                <TextInputComp
                  value={data.userName}
                  // keyboardType=""
                  placeholder={strings.USERNAME}
                  inputStyle={styles.InputStyle}
                  onChangeText={(txt) => {
                    setData({
                      ...data,
                      userName: txt,
                    });
                  }}
                />
                <TextInputComp
                  value={data.fullName}
                  // keyboardType=""
                  placeholder={strings.FULL_NAME}
                  inputStyle={styles.InputStyle}
                  onChangeText={(txt) => {
                    setData({
                      ...data,
                      fullName: txt,
                    });
                  }}
                />
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
                  // keyboardType=""
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
                <TextInputComp
                  value={data.confirmPassword}
                  // keyboardType=""
                  placeholder={strings.CONFIRM_PASSWORD}
                  inputStyle={styles.InputStyle}
                  secureTextEntry={secureText}
                  secureText={secureText ? strings.SHOW : strings.HIDE}
                  onPressSecure={() => setSecureText(!secureText)}
                  onChangeText={(txt) => {
                    setData({
                      ...data,
                      confirmPassword: txt,
                    });
                  }}
                />
              </View>
              {/* <Text style={styles.forgotText}>{strings.FORGOT_PASSWORD}</Text> */}
            </View>
            <ButtonComp
              btnText={strings.LOGIN}
              onClick={() => {
                console.log("Data   => ", data), navigation.navigate("Home");
              }}
            />
          </View>
        </WrapperContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingTextStyle: {
    fontSize: textScale(28),
    fontFamily: fonts.BarlowBold,
    color: colors.whiteColor,
    // paddingVertical: verticalScale(30),
  },
  textStyle: {
    fontSize: textScale(13),
    fontFamily: fonts.BarlowRegular,
    color: colors.whiteColor,
    marginVertical: verticalScale(7),
    // paddingVertical: verticalScale(30),
  },
  forgotText: {
    fontSize: textScale(12),
    fontFamily: fonts.BarlowSemiBold,
    color: colors.blueColor,
    marginVertical: verticalScale(7),
    textAlign:'right'
    // paddingVertical: verticalScale(30),
  },
  InputStyle: {
    backgroundColor: colors.lightGrey,
  },
});

