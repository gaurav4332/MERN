import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "@styles/responsiveSize";
import colors from "@styles/colors";
import fonts from "@assets/fonts";
import { useSelector } from "react-redux";

const TextInputComp = ({
  value = "",
  onChangeText,
  placeholder = "",
  secureText = true,
  onPressSecure = () => {},
  inputStyle = {},
  secureTextEntry=false,
  keyboardType = {},
  textStyle = {},
  placeholderTextColor = colors.whiteColorOpacity70,
  ...props
}) => {
  const { lang } = useSelector((state) => state?.appSetting);

  return (
    <View style={{ ...inputStyle, ...styles.inputStyle }}>
      <TextInput
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        placeholderTextColor={placeholderTextColor}
        style={{ ...styles.input, ...inputStyle ,}}
        {...props}
      />
        {!!secureText? <Text style={{...styles.textStyle,flex:0}} onPress={onPressSecure}>{secureText}</Text>:null}
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  inputStyle: {
    height: moderateScale(52),
    borderRadius: moderateScale(8),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: moderateScale(16),
    alignItems: "center",
    backgroundColor: colors.gray2,
    marginBottom: moderateScaleVertical(16),
  },
  textStyle: {
    fontSize: textScale(14),
    fontFamily: fonts.regular,
    flex: 1,
    color: colors.whiteColor,
  },
});
