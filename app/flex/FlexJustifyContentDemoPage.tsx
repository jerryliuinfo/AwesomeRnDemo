import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";


export class FlexJustifyContentDemoPage extends React.Component<any, any> {

  justifyContentContainer = (text:string, style:ViewStyle) => {
    return (
       <View style={{flexDirection:'column',alignItems:'center',margin:4}}>
         <Text>{text}</Text>
         <View style={[styles.alignContentBase,style]}>
           <View style={[styles.item, { backgroundColor: "pink" }]}></View>
           <View style={[styles.item, { backgroundColor: "red" }]}></View>
           <View style={[styles.item, { backgroundColor: "purple" }]}></View>
         </View>
       </View>
    )
  }


  render() {
    return (
        <View style={styles.container}>

          {
            this.justifyContentContainer('center', styles.alignContentCenter)
          }

          {
            this.justifyContentContainer('space-between', styles.justifyContentSpaceBetween)
          }

          {
            this.justifyContentContainer('space-around', styles.justifyContentSpaceAround)
          }

          {
            this.justifyContentContainer('space-evenly', styles.justifyContentSpaceEvenly)
          }

          {
            this.justifyContentContainer('space-evenly', styles.justifyContentSpaceEvenly)
          }



        </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent:'flex-start',
    //如果一条轴线排不下,如何换行
    flexWrap:'wrap',
    // alignItems: "center",
    flex: 1
  },

  alignContentBase: {
    width: 200,
    height: 100,
    backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "center",
  },

  alignContentCenter: {
    justifyContent: "center",
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between"
  },
  justifyContentSpaceAround: {
    justifyContent: "space-around"
  },
  justifyContentSpaceEvenly: {
    justifyContent: "space-evenly"
  },
  item: {
    width: 40,
    height: 40,
    marginTop: 8,
  }


});