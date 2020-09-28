import React from "react";
import { View, Button, StyleSheet } from "react-native";

const LayoutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Box Screen"
        onPress={() => navigation.navigate("Box")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default LayoutScreen;
