import React from "react";
import {
  Button,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView, Platform,
  StyleSheet,
  Text, TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { ComStyle, isAndroid } from "../../AppContext";

export class KeybordAvoidingViewComponent extends React.Component{

  render() {

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={"height"}

      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
        >
          <View style={styles.inner}>
            <Text style={[styles.header,ComStyle.whiteText]}>Heaer</Text>
            <TextInput placeholder={"Username"} style={styles.textInput}/>
            <View style={styles.btnContainer}>
              <Button title={"Submit"} onPress={() => null}/>
            </View>
          </View>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

    );
  }
}
const styles = StyleSheet.create({
  container: {
  },
  inner: {
    padding: 24,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});
