import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';

import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = ({ onStartGame }) => {
  const [confirmedValue, setConfirmedValue] = useState('');
  const handleStartGame = () => {
    setConfirmedValue(1);
    onStartGame(confirmedValue);
  }
  return (
    <View style={styles.screen}>
      <Card style={styles.inputContainer}>
        <View>
          <Text style={styles.title}>No te quedes sin Dinero!</Text>
          <Text style={styles.title}>Empiezas con 100$</Text>
          <View style={styles.buttonContainer}>
            <Button title='EMPEZAR JUEGO' onPress={handleStartGame} color={Colors.secondary}/>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: '80%',
    minWidth: 300,
    maxWidth: '90%',
    height: '30%',
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 20,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  input: {
    width: 100,
  },
  button: {
    width: Dimensions.get('window').width / 3,
  },
  summaryContainer: {
    marginVertical: 10,
    padding: 10,
  }
});

export default StartGameScreen;