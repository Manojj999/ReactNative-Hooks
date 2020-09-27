import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

function ColorScreen(props) {
  const [colors, setColors] = useState([]);
  return (
    <View style={styles.container}>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        data={colors}
        keyExtractor={(item) => item }
        renderItem={(item) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          );
        }}
      />
    </View>
  );
}

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue} )`;
};

const styles = StyleSheet.create({
  container: {},
});

export default ColorScreen;
