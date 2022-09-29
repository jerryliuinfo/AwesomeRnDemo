import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { showLog } from "../../util/ComUtils";
import RadiusBtn from "../../widget/RadiusBtn";
import { useCounter } from "./useCounter";


interface IHomePageHooksProps{
  route:any,
  navigation:any,
}

// @ts-ignore
export const HomePageHooks = ({ route, navigation }:IHomePageHooksProps) => {
  // const [ value, isEven, handleIncrement, handleDecrement ]= useCounter();
  const [count,setCount] = useState(0)

  useEffect(() =>{
      showLog(`count on change :${count}`)
    }, [count])

  useEffect(() =>{
    showLog(`params post on change :${route.params?.post}`)
    if (route.params?.post){

    }
  }, [route.params?.post])

  return (
    <View style={styles.container}>

      <Text>{count}</Text>
      {
        <RadiusBtn
          btnStyle={{marginTop:10}}
          btnName={'Increment'}
          onPress={() => setCount(count+1)}
        />
      }
      {
        <RadiusBtn
          btnStyle={{marginTop:10}}
          btnName={'Decrement'}
          onPress={() => setCount(count-1)}
        />
      }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
