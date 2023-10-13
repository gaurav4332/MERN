import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { moderateScale } from "@styles/responsiveSize";
import { Image } from "react-native";
import imagePath from "@constants/imagePath";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import colors from "@styles/colors";

const HeaderComp = ({ onPressLeft }) => {
  const isDarkTheme = useSelector((state) => state?.appSetting?.isDark);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={!!onPressLeft ? onPressLeft :()=> navigation.goBack()}
      >
        <Image source={imagePath.icBack} style={{tintColor:isDarkTheme?colors.whiteColor:colors.blackColor}} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  container: {
    height: moderateScale(42),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: moderateScale(16),
  },
});
