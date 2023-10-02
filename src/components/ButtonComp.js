import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from '@styles/responsiveSize';
import colors from '@styles/colors';

const ButtonComp = ({
  btnText = '',
  btnStyle = {},
  textStyle = {},
  onClick = () => {},
}) => {
  console.log(btnStyle);
  return (
    <TouchableOpacity
      style={[styles.main, {...btnStyle}]}
      activeOpacity={0.7}
      onPress={onClick}>
      <Text style={[styles.text, {...textStyle}]}>{btnText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  main: {
    height: verticalScale(50),
    backgroundColor: colors.cyan,
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: scale(15),
    color: 'red',
    fontWeight: '500',
  },
});
