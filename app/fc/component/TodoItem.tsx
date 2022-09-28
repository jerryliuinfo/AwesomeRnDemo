import React, { FC, ReactElement } from "react";
import { ITodo } from "../../bean/ITodo";
import { Button, Switch, Text, View } from "react-native";

interface IProps{
  todo:ITodo,
  toggleTodo:(id:number) => void,
  removeTodo:(id:number) => void,
}
export const TodoItem:FC<IProps> = ({
  todo,
  toggleTodo,
  removeTodo
}):ReactElement => {

  const {id,content,completed} = todo
  return (
   <View style={{flexDirection:'row',}}>
     <Switch />
     <Text>{content}</Text>
     <Button title={'删除'} onPress={() => removeTodo(id)}></Button>
   </View>
  )
}