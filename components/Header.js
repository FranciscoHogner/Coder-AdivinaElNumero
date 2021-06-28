import { StyleSheet, Text, View } from "react-native";

import React from "react";
import { func } from "prop-types";

export default function Header({
    title
    }) {
    return(
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: '#cbd4c2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    color: 'black',
  }
});
