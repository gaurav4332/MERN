import { StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "@styles/responsiveSize";
import colors from "@styles/colors";
import fonts from "@assets/fonts";
import imagePath from "@constants/imagePath";

const ButtonComp = ({
  btnText = "",
  btnStyle = {},
  textStyle = {},
  onClick = () => {},
  leftImg = null,
}) => {
  return (
    <TouchableOpacity
      style={[styles.main, { ...btnStyle }]}
      activeOpacity={0.7}
      onPress={onClick}
    >
      {!!leftImg ? <Image source={leftImg} /> : <View />}
      <Text style={[styles.text, { ...textStyle }]}>{btnText}</Text>
      <View />
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  main: {
    height: moderateScale(52),
    // width: "100%",
    backgroundColor: colors.redColor,
    borderRadius: moderateScale(8),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: moderateScale(16),
  },
  text: {
    fontSize: scale(15),
    color: colors.whiteColor,
    // fontWeight: '500',
    fontFamily: fonts.BarlowSemiBold,
  },
});
