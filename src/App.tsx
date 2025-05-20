import { Linking, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AppContainer from './navigation/stackNavigator'
import { useNavigation } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
enableScreens();

const App = () => {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})