import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "@styles/colors";
import { useSelector } from "react-redux";

const WrapperContainer = ({ style = {}, children }) => {
  const {selectedTheme} = useSelector((state) => state?.appSetting);
  console.log("selected theme ",useSelector((state) => state?.appSetting));
  return (
    <View
      style={{
        ...styles.container,
        ...style,
        backgroundColor:
          selectedTheme == "dark" ? colors.themeColor : colors.whiteColor,
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
