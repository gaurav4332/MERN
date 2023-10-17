import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { textScale } from "@styles/responsiveSize";
import colors from "@styles/colors";
import fonts from "@assets/fonts";
import { useSelector } from "react-redux";

const TextComp = ({ text = "", style = {}, children, ...props }) => {
  const { selectedTheme, lang } = useSelector((state) => state?.appSetting);

  return (
    <Text
      {...props}
      style={{
        ...styles.textStyle,
        color: selectedTheme == "dark" ? colors.whiteColor : colors.blackColor,
        ...style,
      }}
    >
      {text}
      {children}
    </Text>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: textScale(12),
    textAlign: "left",
    color: colors.whiteColor,
    fontFamily: fonts.BarlowRegular,
  },
});
