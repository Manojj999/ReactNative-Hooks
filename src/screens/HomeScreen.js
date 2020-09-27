import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // console.log(props.navigation);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello Manoj</Text>

      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Component")}
        title="Tap me For Component Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigation.navigate("Count")}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go to Square Screen"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go to Square Reducer Screen"
        onPress={() => navigation.navigate("SquareReducer")}
      />
      <Button
        title="Go to Text Screen"
        onPress={() => navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 20,
    padding: 5,
  },
  text: {
    fontSize: 30,
  },
  button: {
    padding: 20,
    borderRadius: 20
  },
});

export default HomeScreen;
