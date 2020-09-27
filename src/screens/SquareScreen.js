import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const Color_Increment = 15;

function SquareScreen(props) {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", Color_Increment)}
        onDecrease={() => setColor("red", -1 * Color_Increment)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", Color_Increment)}
        onDecrease={() => setColor("green", -1 * Color_Increment)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", Color_Increment)}
        onDecrease={() => setColor("blue", -1 * Color_Increment)}
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
