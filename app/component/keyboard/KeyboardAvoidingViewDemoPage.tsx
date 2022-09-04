import React from "react";
import {
  Button,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native";

export class KeyboardAvoidingViewDemoPage extends React.Component<any, any>{
  render() {
    return (
      <KeyboardAvoidingView
        behavior={'height'}
        style={[styles.container]}
        //是否启用 KeyboardAvoidingView。
        enabled={true}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <View style={styles.inner}>
             <Text style={styles.header}>Header</Text>
             <TextInput placeholder={'Username'} style={styles.textInput}/>
             <View style={styles.btnContainer}>
               <Button title={'Submit'} />

             </View>
           </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    padding: 24,
    flex: 1,
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
