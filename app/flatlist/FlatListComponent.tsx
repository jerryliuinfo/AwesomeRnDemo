import React from "react";
import { FlatList, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { ComStyle } from "../../AppContext";

export const FlatListComponent = () => {

  // const DATAS = [{key: 'a'}, {key: 'b'},{key: 'c'}]
  const DATAS = [{key: 'a'}, {key: 'b'},{key: 'c'}]
  const ITEM_HEIGHT = 40
  return (
    <View style={styles.container}>
      <Text style={ComStyle.whiteText}>FlatList 使用:</Text>
      <FlatList
        data={DATAS}
        renderItem={({item,index,separators}) => (
          <TouchableHighlight
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}
          >
            <Text style={[styles.item]}>{item.key}</Text>
          </TouchableHighlight>
        )}
        horizontal={true}
        ItemSeparatorComponent={Seperator}
        ListHeaderComponent={(<View>
          <Text style={styles.item}>I am header</Text>
        </View>)}
        ListFooterComponent={(<View>
          <Text style={styles.item}>I am Footer</Text>
        </View>)}

        ListEmptyComponent={EmptyView}


      />
    </View>
  );
};

const Seperator = () => {
  return (
    <View style={{backgroundColor:"green", borderColor:"red", borderWidth:2,  width:10}}></View>
  )
}


const EmptyView = () => {
  return (
    <Text style={ComStyle.whiteText}>空空如也</Text>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    color: Colors.white,
    backgroundColor:"red",
  }
});
