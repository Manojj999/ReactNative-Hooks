import React, { useReducer, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const Color_Increment = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

    default:
      return state;
  }
};
function SquareScreen(props) {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  //  console.log(state);

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: Color_Increment })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * Color_Increment })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: Color_Increment })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * Color_Increment })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: Color_Increment })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * Color_Increment })
        }
        color="Blue"
      />
      <View
        style={{
          width: 150,
          height: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SquareScreen;
