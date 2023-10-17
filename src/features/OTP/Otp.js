import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import WrapperContainer from "@components/Container/WrapperContainer";
import HeaderComp from "@components/HeaderComp";
import TextComp from "@components/TextComp";
import strings from "@constants/lang";
import { textScale, verticalScale } from "@styles/responsiveSize";
import colors from "@styles/colors";
import ButtonComp from "@components/ButtonComp";
import OTPTextView from "react-native-otp-textinput";

const Otp = ({ navigation }) => {
  const input = useRef(null);
  const [count, setCount] = useState(0);
  const [times, setTimes] = useState(1);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount((count) => count - 1);
      }, 1000);
    }
    if (count === 0) {
      setIsActive(false);
    }
  }, [count]);
  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  }

  const handleCount = () => {
    setIsActive(true);
    setCount(30 * times);
    setTimes(times + 1);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <WrapperContainer>
        <HeaderComp />
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.main}>
            <View>
              <TextComp
                style={styles.headingTextStyle}
                text={strings.ENTER_THE_FOUR_DIGIT}
              />
              <TextComp
                onPress={() => {}}
                style={styles.textStyle}
                text={strings.EDIT_MY_EMAIL}
              />
              <OTPTextView
                ref={input}
                handleTextChange={() => {}}
                containerStyle={styles.textInputContainer}
                textInputStyle={styles.roundedTextInput}
                inputCount={4}
                autoFocus
              />
            </View>
            <View>
              <View
                style={{
                  marginBottom:verticalScale(50),
                  flexDirection:'row'
                }}
              >
                <TouchableOpacity disabled={isActive} onPress={handleCount}>
                  <Text
                    style={[
                      {
                        textDecorationLine: "underline",
                        color: !isActive ? colors.GREEN_ACTION : colors.GREY,
                      },
                    ]}
                  >
                    {strings.RESEND_CODE}
                  </Text>
                </TouchableOpacity>
                <View>
                  {isActive && <TextComp>{"  "}in {secondsToHms(count)}</TextComp>}
                </View>
              </View>

              <ButtonComp
                btnText={strings.LOGIN}
                onClick={() => {
                  navigation.navigate("Home");
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </WrapperContainer>
    </KeyboardAvoidingView>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  headingTextStyle: {
    fontSize: textScale(28),
    fontFamily: fonts.BarlowBold,
    textAlign: "left",
    // paddingVertical: verticalScale(30),
  },
  textStyle: {
    fontSize: textScale(13),
    fontFamily: fonts.BarlowRegular,
    color: colors.blueColor,
    marginVertical: verticalScale(7),
    textAlign: "left",
  },
  textInputContainer: {
    marginBottom: 20,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: verticalScale(90),
  },
});
