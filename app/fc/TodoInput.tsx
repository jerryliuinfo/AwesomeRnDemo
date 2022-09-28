import React, { FC, ReactElement, useRef, useState } from "react";
import { Alert, Button, TextInput, View } from "react-native";
import { ITodo } from "../bean/ITodo";
import { showLog } from "../util/ComUtils";

interface ITodoInputProps {
  addTodo: (item: ITodo) => void,
  todoList: ITodo[],
}

export const TodoInput: FC<ITodoInputProps> = ({ addTodo, todoList
                                               }): ReactElement => {

  const inputRef = useRef<HTMLInputElement>(null);

  const [text,setText] = useState('')

  const addItem = (): void => {
    // const inputContent: string = inputRef.current!.value.trim();
    const inputContent: string = text
    showLog(`inputContent:${inputContent}`)
    if (inputContent.length) {
      const isExist = todoList.find((item) => item.content === inputContent);
      if (isExist) {
        Alert.alert("已存在该项");
        return;
      }
      addTodo({
        id: new Date().getTime(),
        content: inputContent,
        completed: false
      });
      setText('')
    }
  };


  return (
    <View >
      <TextInput
        value={text}
        onChangeText={(text:string) => setText(text)}
        placeholder={"请输入内容"}
      />
      <Button title={"增加"} onPress={addItem} />
    </View>
  );

};