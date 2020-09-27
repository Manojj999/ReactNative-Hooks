import React from "react";
import { Text, View, Image } from "react-native";

const ImageDetail = ({ imageScore, title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text>{title}</Text>
      <Text>Image Score -{imageScore}</Text>
    </View>
  );
};

export default ImageDetail;
