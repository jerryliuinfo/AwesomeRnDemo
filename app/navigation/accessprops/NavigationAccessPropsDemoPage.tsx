import React, { FC, ReactElement } from "react";
import { Button, StyleSheet, View } from "react-native";
import { PATH_NAVIGATION_DETAIL } from "../../consants/NavigationConstants";
import { useNavigation } from "@react-navigation/native";
import RadiusBtn from "../../widget/RadiusBtn";

interface IProps{
  navigation:any
}
export const NavigationAccessPropsDemoPage:FC<IProps> = ({navigation}):ReactElement => {
  const navigation2 = useNavigation()
  return (
    <View style={styles.container}>

      {
        <RadiusBtn
          btnStyle={{marginTop:10}}
          btnName={'使用Props 传递的 navigation 属性跳转'}
          onPress={() => navigation.push(PATH_NAVIGATION_DETAIL)}
        />
      }
      {
        <RadiusBtn
          btnStyle={{marginTop:10}}
          btnName={'使用 useNavigation 获取 navigation 属性跳转'}
          onPress={() => navigation2.navigate(PATH_NAVIGATION_DETAIL)}
        />
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
