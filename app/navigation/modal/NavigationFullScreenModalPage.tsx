import React from "react";
import { Button, Text, View } from "react-native";
import { NavigationActions } from "@react-navigation/compat";
export class NavigationFullScreenModalPage extends React.Component<any, any>{
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => {
          this.props.navigation.goBack()
        }

        } title="Dismiss" />
      </View>
    );
  }
}
