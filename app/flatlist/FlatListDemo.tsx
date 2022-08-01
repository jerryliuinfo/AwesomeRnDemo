import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const DATAS = [
  {id: "id1", name:"first item"},
  {id: "id2", name:"second item"},
  {id: "id3", name:"third item"},
]

const MyItem = (params:any) =>
  (
   <TouchableOpacity >
     <Text style={styles.title}> {params.name}</Text>
   </TouchableOpacity>
 )


const renderItem = (text:string) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{text}</Text>
    </View>
  )
}

export class ListComponent extends React.Component{

  render() {
    return (
      <View style={ styles.container}>
        <FlatList
          data={DATAS}
          renderItem={({item,index,separators})=> renderItem(item.name)}
          keyExtractor={item => item.id}
        />

      </View>
    )
  }

}


export class ListComponent2 extends React.Component{

  render() {
    // const [selectedId,setSelectedId] = useState(null)
    return (
      <View style={ styles.container}>
        <FlatList
          data={DATAS}
          renderItem={({item})=>
            // <Text style={styles.title}>{item.name}</Text>
            {
              const backgroundColor = item.id === "1" ? "#6e3b6e" : "#f9c2ff"
              return (
                <MyItem
                  name={item.name}
                  style={{ backgroundColor }}
                />
              )
            }
          }
          keyExtractor={item => item.id}
        />

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"row"
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    color:Colors.white
  },
});
