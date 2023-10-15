import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Modal from "react-native-modal";

const ModalComp = ({
  isVisible = false,
  children,
  onBackdropPress = () => {},
  style = {},
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={{ ...styles.style, ...style }}
    >
      {children}
    </Modal>
  );
};

export default ModalComp;

const styles = StyleSheet.create({
    style:{}
});
