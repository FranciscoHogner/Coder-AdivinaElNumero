import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import Card from '../components/Card';
import CardContainer from '../components/CardContainer';
import Colors from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const random = Math.floor(Math.random() * (max - min) + min)

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return random;
  }
}


const GameScreen = ({ onEndGame }) => {
  const [dinero, setDinero] = useState(100);
  const [cartaJugador, setCartaJugador] = useState(0);
  const [cartaMaquina, setCartaMaquina] = useState(0);

  const handleEndGame = () => {
    onEndGame(0)
  }

  const handleNewNumber = () => {
    const nextCartaJugador = generateRandomBetween(1, 12);
    const nextCartaMaquina = generateRandomBetween(1, 12);
    setCartaJugador(nextCartaJugador);
    setCartaMaquina(nextCartaMaquina);
    return {
      nextCartaJugador,
      nextCartaMaquina
    }
  }
  const handleApuestaBaja = () => {
    const { nextCartaJugador, nextCartaMaquina } = handleNewNumber()
    if(nextCartaJugador > nextCartaMaquina){
      setDinero(dinero+10);
    }else {
      setDinero(dinero-10);
    }
  }
  const handleApuestaAlta = () => {
    const { nextCartaJugador, nextCartaMaquina } = handleNewNumber()
    if(nextCartaJugador > nextCartaMaquina){
      setDinero(dinero+50);
    }else {
      setDinero(dinero-50);
    }
  }

  return (
    <View style={styles.screen}>
      <Card>
        <Text>
          Tu dinero:{dinero}
        </Text>
        </Card>
      <View>
        <Text style={styles.numero}>Tu Numero</Text>
        <CardContainer>{cartaJugador}</CardContainer>
        <Text style={styles.numero}>Numero de la casa</Text>
        <CardContainer>{cartaMaquina}</CardContainer>
        <View style={styles.betButtons}>
          <Button title='Apostar 10' onPress={handleApuestaBaja} color={Colors.black}></Button>
          <Button title='Apostar 50' onPress={handleApuestaAlta} color={Colors.primary}></Button>
        </View>
      </View>
      <Button title="TERMINAR" onPress={handleEndGame} color={Colors.secondary} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  numero: {
    fontFamily: 'open-sans-bold',
  },
  betButtons: {
    flexDirection: 'row',
    margin: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
    padding: 10,
    width: 300,
    maxWidth: '80%',
    marginBottom: 10,
  }
});

export default GameScreen;