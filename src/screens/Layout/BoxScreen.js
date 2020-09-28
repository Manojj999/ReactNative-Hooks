import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textOne}></View>
      <View style={styles.textTwo}></View>
      <View style={styles.textThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    borderColor: "black",
    alignItems:'center',
    
     flexDirection:'row',
     justifyContent:'space-between'
    
  },
  textOne: {
    
    
    backgroundColor:'red',
    height: 100,
    width:100,
    alignSelf:'flex-start',
   
  },
  textTwo: {
    
    
    backgroundColor:'green',
    height: 100,
    width:100,
    
    
     top:100,
    // ...StyleSheet.absoluteFillObject
    
    
  },
  textThree: {
    
    backgroundColor:'purple',
    height: 100,
    width:100,
    alignSelf:'flex-end'
  
  },
});

export default BoxScreen;
