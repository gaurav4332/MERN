import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "@styles/colors";

const WrapperContainer = ({ style = {}, children }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
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
