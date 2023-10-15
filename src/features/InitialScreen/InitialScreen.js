import {
  I18nManager,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import navigationStrings from "@navigation/navigationStrings";
import ButtonComp from "@components/ButtonComp";
import {
  height,
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
import TextComp from "@components/TextComp";
import { useSelector } from "react-redux";
import ModalComp from "@components/ModalComp";
import TextCheckbox from "@components/TextCheckbox";
import { LangData } from "@constants/LangTheme/Lang";
import { ThemeData } from "@constants/LangTheme/Theme";
import RNRestart from "react-native-restart";
import { changeAppTheme, changeLanguage } from "@redux/actions/appSettings";
import { changeLang } from "@redux/reducers/appSettings";
const { dispatch } = store;

const InitialScreen = ({ navigation }) => {
  const { selectedTheme, lang } = useSelector((state) => state?.appSetting);
  const [isVisible, setIsVisible] = useState(false);

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
  const onPressLang = (lan) => {
    setIsVisible(false);
    if (lan == "ar" && lan !== lang) {
      changeLanguage(lan);
      I18nManager.forceRTL(true);
      RNRestart.restart();
    } else if (lan !== lang) {
      changeLanguage(lan);
      I18nManager.forceRTL(false);
      RNRestart.restart();
    }
  };
  const onPressTheme = (Theme) => {
    setIsVisible(false);
    changeAppTheme(Theme);
  };
  return (
    <WrapperContainer>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            ...styles.circularView,
            backgroundColor:
              selectedTheme == "dark" ? colors.whiteColor : colors.gray2,
          }}
          onPress={() => setIsVisible(true)}
        >
          <Text
            style={{
              ...styles.langtxt,
              color:
                selectedTheme == "dark" ? colors.blackColor : colors.whiteColor,
            }}
          >
            {lang}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 0.3,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image source={imagePath.icLogo} style={styles.imageStyle} />
        </View>
        <View style={{ flex: 0.7, justifyContent: "flex-end" }}>
          <TextComp text={strings.BY_CLICKING_LOG_IN}>
            <Text onPress={() => privacyPolicy(1)}>{strings.TERMS}</Text>.{" "}
            {strings.LEARN_HOW_WE_PRCOESS}{" "}
            <Text onPress={() => privacyPolicy(2)}>
              {strings.PRIVACY_POLICY}
            </Text>
          </TextComp>
          <ButtonComp
            btnText={strings.LOG_IN_WITH_PHONE_NUMBER}
            btnStyle={{ marginTop: verticalScale(30) }}
            onClick={() => navigation.navigate(navigationStrings.LOGIN)}
          />
          <TextComp
            style={{ paddingVertical: verticalScale(20), textAlign: "center" }}
            text="Or"
          />
          <ButtonComp
            btnText={strings.LOG_IN_WITH_GOOGLE}
            leftImg={imagePath.icGoogle}
            btnStyle={{
              ...styles.btnStyle,
              backgroundColor:
                selectedTheme == "dark"
                  ? colors.whiteColor
                  : colors.blackOpacity50,
            }}
            textStyle={styles.btntextStyle}
          />
          <ButtonComp
            btnText={strings.LOG_IN_WITH_FACEBOOK}
            leftImg={imagePath.icFacebook}
            btnStyle={{
              ...styles.btnStyle,
              backgroundColor:
                selectedTheme == "dark"
                  ? colors.whiteColor
                  : colors.blackOpacity50,
            }}
            textStyle={styles.btntextStyle}
          />
          <ButtonComp
            btnText={strings.LOG_IN_WITH_APPLE}
            leftImg={imagePath.icApple}
            btnStyle={{
              ...styles.btnStyle,
              backgroundColor:
                selectedTheme == "dark"
                  ? colors.whiteColor
                  : colors.blackOpacity50,
            }}
            textStyle={styles.btntextStyle}
          />
          <TextComp
            style={{
              textAlign: "right",
              ...styles.textStyle,
              marginTop: verticalScale(15),
            }}
            text={strings.NEW_HERE + ` `}
          >
            <Text
              onPress={() => navigation.navigate(navigationStrings.SIGNUP)}
              style={{ ...styles.textStyle, color: colors.blueColor }}
            >
              {strings.SIGN_UP}
            </Text>
          </TextComp>
        </View>
      </View>
      <ModalComp
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View
          style={{
            backgroundColor: colors.whiteColor,
            minHeight: moderateScale(height / 3.8),
            borderTopLeftRadius: moderateScale(8),
            borderTopRightRadius: moderateScale(8),
            padding: moderateScale(16),
          }}
        >
          <Text style={styles.headingStyles}>{strings.CHOOSE_LANGUAGE}</Text>
          {LangData.map((val, i) => (
            <TextCheckbox
              key={String(i)}
              text={val.title}
              isSelected={lang == val.code}
              onPress={() => onPressLang(val.code)}
            />
          ))}
          <Text
            style={{ ...styles.headingStyles, marginTop: moderateScale(12) }}
          >
            {strings.CHOOSE_THEME}
          </Text>
          {ThemeData.map((val, i) => (
            <TextCheckbox
              key={String(i)}
              text={val.title}
              isSelected={val.code == selectedTheme}
              onPress={() => onPressTheme(val.code)}
            />
          ))}
        </View>
      </ModalComp>
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
    marginTop: verticalScale(20),
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
  circularView: {
    height: moderateScale(40),
    width: moderateScale(40),
    backgroundColor: colors.redColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(40),
    alignSelf: "flex-end",
  },
  langtxt: {
    textTransform: "capitalize",
    fontFamily: fonts.BarlowSemiBold,
    fontSize: textScale(12),
  },
  headingStyles: {
    fontSize: textScale(16),
    color: colors.blackColor,
    fontFamily: fonts.BarlowSemiBold,
    marginBottom: verticalScale(10),
  },
});
