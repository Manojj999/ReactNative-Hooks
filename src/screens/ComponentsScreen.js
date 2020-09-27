import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "MAnoj";
  return (
    <View>
      <Text style={styles.textStyle}>Geting Started With React native</Text>
      <Text style={styles.subText}>{`My NAme is ${name}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subText: {
    fontSize: 20,
  },
});
export default ComponentsScreen;
