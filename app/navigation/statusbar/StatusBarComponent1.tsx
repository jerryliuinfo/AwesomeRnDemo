import React from "react";
import { Button, SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";
import { PATH_NAVIGATION_STATUSBAR1, PATH_NAVIGATION_STATUSBAR2 } from "../../consants/NavigationConstants";

export const StatusBarComponent1 = ({navigation}:{navigation:any}) =>{
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={{ color: '#fff' }}>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate(PATH_NAVIGATION_STATUSBAR2)}
        color="#fff"
      />
    </SafeAreaView>
  );
}

interface IProps{
  navigation:any
}

export const StatusBarComponent2 = ({navigation}:IProps) =>{
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Dark Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate(PATH_NAVIGATION_STATUSBAR1)}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
