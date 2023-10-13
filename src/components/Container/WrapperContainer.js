import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "@styles/colors";
import { useSelector } from "react-redux";

const WrapperContainer = ({ style = {}, children }) => {
  const isDarkTheme = useSelector((state) => state?.appSetting?.isDark);
  return (
    <View
      style={{
        ...styles.container,
        ...style,
        backgroundColor: isDarkTheme ? colors.themeColor : colors.whiteColor,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
    </View>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.themeColor,
  },
});
