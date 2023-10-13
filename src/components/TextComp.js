import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { textScale } from "@styles/responsiveSize";
import colors from "@styles/colors";
import fonts from "@assets/fonts";
import { useSelector } from "react-redux";

const TextComp = ({ text = "", style = {}, children,  ...props }) => {
    const isDarkTheme = useSelector((state) => state?.appSetting?.isDark );

  return (
    <Text
      style={{
        ...styles.textStyle,
        ...style,
        color: isDarkTheme ? colors.whiteColor : colors.blackColor,
      }}
    >
      {text}{children}
    </Text>
  );
};

export default TextComp;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: textScale(12),
    // textAlign: "center",
    color: colors.whiteColor,
    fontFamily: fonts.BarlowRegular,
  },
});
