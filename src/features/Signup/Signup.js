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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import navigationStrings from "@navigation/navigationStrings";

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
    <WrapperContainer>
      <HeaderComp />
      <KeyboardAwareScrollView>
        <View
          style={{
            height: "100%",
            padding: 16,
            justifyContent: "space-between",
          }}
        >
          <View style={{ height: "100%", width: "100%" }}>
            <TextComp
              style={styles.headingTextStyle}
              text={strings.CREATE_NEW_ACCOUNT}
            />
            <TextComp
              style={styles.textStyle}
              text={strings.CREATE_AN_ACCOUNT_SO_YOU_CAN_CONTINUE}
            />
            <View style={{ marginTop: verticalScale(35) }}>
              <TextInputComp
                value={data.userName}
                keyboardType="default"
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
                keyboardType="default"
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
              <TextInputComp
                value={data.confirmPassword}
                keyboardType="default"
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
          </View>
          <View style={{ height: "50%", justifyContent: "center" }}>
            <ButtonComp
              btnText={strings.LOGIN}
              onClick={() => {
                navigation.navigate(navigationStrings.OTP);
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </WrapperContainer>
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
  },
  textStyle: {
    fontSize: textScale(13),
    fontFamily: fonts.BarlowRegular,
    marginVertical: verticalScale(7),
  },
  forgotText: {
    fontSize: textScale(12),
    fontFamily: fonts.BarlowSemiBold,
    color: colors.blueColor,
    marginVertical: verticalScale(7),
    textAlign: "right",
    // paddingVertical: verticalScale(30),
  },
  InputStyle: {
    backgroundColor: colors.lightGrey,
  },
});
