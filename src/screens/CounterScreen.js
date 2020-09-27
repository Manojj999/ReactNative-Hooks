import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Increment_no = 1;
const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state.counter + action.payload < 0
        ? state
        : { ...state, counter: state.counter + action.payload };
    case "Decrement":
      return state.counter + action.payload < 0
      ? state
      : { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View style={styles.container}>
      <Button
        title="Increase"
        onPress={() =>
          dispatch({ type: "Increment", payload: Increment_no })
        }
      />
      <Button
        title="Decrease"
        onPress={() =>
          dispatch({ type: "Decrement", payload: -1 * Increment_no })
        }
      />
      <Text>Current Count : {counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CounterScreen;
