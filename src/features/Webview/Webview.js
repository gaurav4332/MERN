import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import WrapperContainer from "@components/Container/WrapperContainer";
import HeaderComp from "@components/HeaderComp";

const Webview = () => {
  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>
        <HeaderComp />
        <WebView
          source={{ uri: "https://reactnative.dev/" }}
          style={{ flex: 1 }}
        />
      </View>
    </WrapperContainer>
  );
};

export default Webview;

const styles = StyleSheet.create({});
