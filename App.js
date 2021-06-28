import { StyleSheet, Text, TextInput, View } from 'react-native';

import Header from './components/Header';
import React from 'react';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={'Adivina el numero'}/>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
