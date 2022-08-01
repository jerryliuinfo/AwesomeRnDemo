import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ComStyle } from "../../AppContext";

export class ImageBgComponent extends React.Component{

  render() {
    const image = { uri: "https://zh-hans.reactjs.org/logo-og.png" };

    return (
      <View style={ImageStyles.container}>
        <ImageBackground source={image} style={ImageStyles.image}>
          <Text style={ComStyle.whiteText}>Inside</Text>
        </ImageBackground>
      </View>

    );
  }
}

const ImageStyles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
  },
  image: {
    flex:1,
    width:200,
    height:200,
    resizeMode: "cover",
    justifyContent: "center"
  },
})
