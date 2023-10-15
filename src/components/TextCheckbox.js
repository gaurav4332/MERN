import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { textScale, verticalScale } from "@styles/responsiveSize";
import colors from "@styles/colors";
import fonts from "@assets/fonts";
import imagePath from "@constants/imagePath";

const TextCheckbox = ({
  onPress = () => {},
  isSelected,
  text = "",
  image = imagePath.icGreyCheck,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.langView}
    >
      <Text
        style={{
          ...styles.langTextStyles,
          color: isSelected ? colors.redColor : colors.gray2,
        }}
      >
        {text}
      </Text>
      <Image
        tintColor={isSelected ? colors.redColor : colors.gray2}
        source={image}
      />
    </TouchableOpacity>
  );
};

export default TextCheckbox;

const styles = StyleSheet.create({
  langTextStyles: {
    fontSize: textScale(14),
    color: colors.blackColor,
    fontFamily: fonts.BarlowSemiBold,
    marginTop: verticalScale(8),
  },
  langView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
