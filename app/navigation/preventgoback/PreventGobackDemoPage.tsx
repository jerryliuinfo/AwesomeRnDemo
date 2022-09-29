import { Alert, TextInput, View } from "react-native";
import React, { FC, ReactElement } from "react";

interface IProps{
  navigation:any
}
export const PreventGobackDemoPage:FC<IProps> = ({ navigation }):ReactElement => {
  const [text, setText] = React.useState('');
  const hasUnsavedChanges = Boolean(text);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e:any) => {
        if (!hasUnsavedChanges) {
          // If we don't have unsaved changes, then we don't need to do anything
          return;
        }

        // Prevent default behavior of leaving the screen
        e.preventDefault();

        // Prompt the user before leaving the screen
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ]
        );
      }),
    [navigation, hasUnsavedChanges]
  );

  return (
    <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <TextInput
        style={{borderColor:'red', borderWidth:1, color:'black'}}
        value={text}
        placeholder="Type something…"
        onChangeText={setText}
      />
    </View>

  );
}
