import React from "react";
import { Image, View } from "react-native";


export function LogoTitle() {
  return (
    <Image
      source={require("../../../images/ic_guanliyuan.png")}
      style={{ width: 30, height: 30,marginStart:16 }}
    />

  );
}
