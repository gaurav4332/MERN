import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ButtonComp from '@components/ButtonComp';
import colors from '@styles/colors';

const Home = () => {
  return (
    <View>
      <ButtonComp
        btnText="Done"
        btnStyle={{
          backgroundColor: 'green',
        }}
        textStyle={{color: colors.black}}
        onClick={() => alert('OnPress Work')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
