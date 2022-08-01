import React, { useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Cat = (params:any) => {
  //一个值是当前的 state，第二个值是更新 state 的函数
  const [isHungry,setIsHungry] = useState(true)
  return (
    <View>
      <Text style={{color:Colors.white, marginTop:20}}>I am {params.name}, and I am {isHungry ? "hungry": "full"} </Text>
      <Button title={isHungry? "Pour me some milk": "Thank you"}
        disabled={!isHungry}
        onPress={() => {
          setIsHungry(false)
        }}
      />
    </View>
  )
}



export const Cafe  = () => {
  const [count,setCount] = useState(0)
  return (
    <View>
      <Cat name = "Tom"/>
      <Cat name = "Lily"/>
      <Image source={{uri:'https://pics7.baidu.com/feed/267f9e2f07082838dfb399c2ff1e0b0b4d08f138.jpeg?token=fb07fd8f3e96bec09acfbe3dc74c759d'}} style={{width:100,height:100}} />
      <Text style={{color:Colors.white}}>you clicked {count} times </Text>
      <Button title="Click me" onPress={() => setCount(count+1)}/>
    </View>
  )
}


