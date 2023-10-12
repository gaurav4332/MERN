import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { moderateScale } from "@styles/responsiveSize";
import { Image } from "react-native";
import imagePath from "@constants/imagePath";
import { useNavigation } from "@react-navigation/native";

const HeaderComp = ({ onPressLeft }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={!!onPressLeft ? onPressLeft :()=> navigation.goBack()}
      >
        <Image source={imagePath.icBack} />
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
