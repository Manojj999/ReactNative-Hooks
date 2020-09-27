import React from 'react';
import { View , StyleSheet,Button,Text } from 'react-native';

function ColorCounter({color,onIncrease,onDecrease}){
  return(
     <View style={styles.container}>
         <Text>{color}</Text>
         <Button onPress={() => onIncrease()} title={`Increase ${color} Color`}></Button>
         <Button onPress={() => onDecrease()} title={`Decrease ${color} Color`}></Button> 
     </View>
  );
}

const styles = StyleSheet.create({
 container: {}
});

export default ColorCounter;