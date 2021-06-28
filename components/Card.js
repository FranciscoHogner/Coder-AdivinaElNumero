import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import React from "react";

export default function Card(
    props
) {
  return (
  <View style={{ ...styles.cardContainer, ...props.style }}>
    {props.children}
  </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    shadowColor: 'black',
    shadowOffset: { 
        width: 0, 
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
})
