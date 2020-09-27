import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = (props) => {
  const [[password], setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text>Enter Your Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password here"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newVal) => setPassword(newVal)}
      />

      {name.length < 5 ? <Text>Pw Must be greaterthan 5</Text> : null}
      <Text>My Password : {password}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 2,
    textAlign: "center",
  },
});

export default TextScreen;
