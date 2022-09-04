import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { ItemInfo } from "../../model/ItemInfo";

interface IItemProps {
  item: ItemInfo,
  onPress: (id: string) => void,
  style: ViewStyle,
}

export class Item extends React.Component<IItemProps, any> {
  render() {
    const { item, onPress, style } = this.props;
    return (
      <TouchableOpacity onPress={() => {
        onPress(item.id);
      }}>
        <View style={[styles.item, style]}>
          <Text style={[styles.item]}>{item.id + "_" + item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});
