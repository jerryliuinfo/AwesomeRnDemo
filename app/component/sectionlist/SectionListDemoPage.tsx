import React from "react";
import { SafeAreaView, SectionList, StatusBar, StyleSheet, Text, View } from "react-native";
import { showLog } from "../../util/ComUtils";


interface ISectionListState{
   // datas:
}
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },

];
export class SectionListDemoPage extends React.Component<any, any>{
  Item = (title2:string) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title2}</Text>
      </View>
    );
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => {
            showLog(`renderItem: ${JSON.stringify(item)}`)
            return this.Item(item)
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title + " Hello"}</Text>
          )}
        />
      </SafeAreaView>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});
