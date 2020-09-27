import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    {
      name: "Friend-1",
      age:20,
    },
    {
      name: "Friend-2",
      age:21,
    },
    {
      name: "Friend-3",
      age:22,
    },
    {
      name: "Friend-4",
      age:23,
    },
    {
      name: "Friend-5",
      age:24,
    },
    {
      name: "Friend-6",
      age:25,
    },
    {
      name: "Friend-7",
      age:26,
    },
    {
      name: "Friend-8",
      age:25,
    },
    {
      name: "Friend-9 ",
      age:20,
    },
  ];
  return (
    <View>
      <FlatList 
      vertical={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends} 
      renderItem={({item}) => {
        return <Text style={styles.text}>{item.name} - Age {item.age}</Text>
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
   
    marginVertical:10,
    
  },
});

export default ListScreen;
