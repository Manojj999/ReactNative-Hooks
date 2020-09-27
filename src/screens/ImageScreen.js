import React from "react";
import { Text, View ,StyleSheet} from "react-native";
import ImageDetail from '../Components/ImageDetail'
const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={9} />
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={8} />
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={6} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ImageScreen;
