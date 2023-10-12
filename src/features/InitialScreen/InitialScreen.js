import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import navigationStrings from "@navigation/navigationStrings";
import ButtonComp from "@components/ButtonComp";
import {
  moderateScale,
  scale,
  textScale,
  verticalScale,
  width,
} from "@styles/responsiveSize";
import store from "@redux/store";
import { saveUserData } from "@redux/reducers/auth";
import WrapperContainer from "@components/Container/WrapperContainer";
import imagePath from "@constants/imagePath";
import strings from "@constants/lang";
import colors from "@styles/colors";
import fonts from "@assets/fonts";
const { dispatch } = store;

const InitialScreen = ({ navigation }) => {
  const onLogin = () => {
    dispatch(saveUserData({ isLogin: true }));
  };
  const privacyPolicy = (type = 1) => {
    if (type == 1) {
      alert("Terms");
    } else {
      alert("Privacy Policy");
    }
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <View style={{ flex: 0.3 }}>
          <Image source={imagePath.icLogo} style={styles.imageStyle} />
        </View>
        <View style={{ flex: 0.7, justifyContent: "flex-end" }}>
          <Text style={styles.textStyle}>
            {strings.BY_CLICKING_LOG_IN}{" "}
            <Text onPress={() => privacyPolicy(1)}>{strings.TERMS}</Text>.{" "}
            {strings.LEARN_HOW_WE_PRCOESS}{" "}
            <Text onPress={() => privacyPolicy(2)}>
              {strings.PRIVACY_POLICY}
            </Text>
          </Text>
          <ButtonComp
            btnText={strings.LOG_IN_WITH_PHONE_NUMBER}
            btnStyle={{ marginTop: verticalScale(30) }}
            onClick={()=> navigation.navigate(navigationStrings.LOGIN)}
          />
          <Text
            style={{ ...styles.textStyle, paddingVertical: verticalScale(20) }}
          >
            Or
          </Text>
          <ButtonComp
            btnText={strings.LOG_IN_WITH_GOOGLE}
            leftImg={imagePath.icGoogle}
            btnStyle={styles.btnStyle}
            textStyle={styles.btntextStyle}
          />
          <ButtonComp
            btnText={strings.LOG_IN_WITH_FACEBOOK}
            leftImg={imagePath.icFacebook}
            btnStyle={styles.btnStyle}
            textStyle={styles.btntextStyle}
          />
          <ButtonComp
            btnText={strings.LOG_IN_WITH_APPLE}
            leftImg={imagePath.icApple}
            btnStyle={styles.btnStyle}
            textStyle={styles.btntextStyle}
          />
          <Text style={{ ...styles.textStyle, marginTop: verticalScale(15) }}>
            {strings.NEW_HERE}{" "}
            <Text
              onPress={() => alert("signup")}
              style={{ ...styles.textStyle, color: colors.blueColor }}
            >
              {strings.SIGN_UP}
            </Text>
          </Text>
        </View>
      </View>
    </WrapperContainer>
  );
};

export default InitialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: moderateScale(14),
  },
  imageStyle: {
    height: scale(150),
    width: scale(150),
    marginTop: verticalScale(30),
  },
  textStyle: {
    fontSize: textScale(12),
    textAlign: "center",
    color: colors.whiteColor,
    fontFamily: fonts.BarlowRegular,
  },
  btnStyle: {
    marginTop: verticalScale(10),
    backgroundColor: colors.whiteColor,
  },
  btntextStyle: {
    color: colors.blackColor,
  },
});
