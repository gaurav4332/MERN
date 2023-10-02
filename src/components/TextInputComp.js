import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { moderateScale } from "@styles/responsiveSize";
import colors from "@styles/colors";

const TextInputComp = ({
  value = "",
  onChangeText = () => {},
  placeholder = "d",
  inputStyle = {},
  keyboardType="",
  placeholderColor=colors.darkGrey
}) => {
  return (
    <TextInput
      value={value}
      keyboardType={keyboardType}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderColor}
      style={{ ...styles.input, ...inputStyle }}
    />
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  input: {
    height: moderateScale(45),
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    borderColor:colors.dimGrey
  },
});
