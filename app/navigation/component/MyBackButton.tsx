import { Image } from "react-native";
import React from "react";


export interface IMyBackButtonProps{
  onPress:() =>void
}

export const MyBackButton =() =>{
 return (
   <Image source={require('../../../images/ic_back_arrow.png')}
      style={{width:40,height:40}}
   />
 )
}
