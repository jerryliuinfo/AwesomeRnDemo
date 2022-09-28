import React from "react";
import { ScrollView, StyleSheet, Text, View, ViewStyle } from "react-native";


export class DiceDemoPage extends React.Component<any, any> {

  justifyContentContainer = (text:string, style:ViewStyle) => {
    return (
      <View style={{flexDirection:'column',alignItems:'center',margin:4}}>
        <Text>{text}</Text>
        <View style={[styles.itemContainer,style]}>
          <View style={[styles.item, { backgroundColor: "pink" }]}></View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.itemContainer}>

          </View>

        </View>


      </ScrollView>

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

  itemContainer: {
    width: 200,
    height: 200,
    backgroundColor: "green",
    flexDirection: "row",
  },

  item: {
    width: 40,
    height: 40,
    marginTop: 8
  }


});