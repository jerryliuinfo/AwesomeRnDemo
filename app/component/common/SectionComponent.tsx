import React from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


interface ISectionProps{
  title:string,
  desc:string,
  onPress:() => void
}

export default class SectionComponent extends React.Component<ISectionProps, any>{
  render() {
    const {title,desc,onPress} = this.props
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.sectionContainer} >
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.sectionDescription}>
            {desc}
          </Text>
        </View>
      </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
})
