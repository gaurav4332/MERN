import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import navigationStrings from '@navigation/navigationStrings'
import fonts from '@assets/fonts'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text style={{fontFamily:fonts.BarlowBold}} onPress={()=>navigation.navigate(navigationStrings.SEARCH)}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})