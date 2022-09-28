import React, { FC, ReactElement, useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { TodoInput } from "./TodoInput";
import { ITodo } from "../bean/ITodo";
import { showLog } from "../util/ComUtils";


export const FcTodoList: FC = (): ReactElement => {

  const [todoList, setTodoList] = useState<ITodo[]>([]);

  useEffect(() => {
    showLog(`todoList:${JSON.stringify(todoList)}`)
  }, [todoList])

  /**
   * 注意，这个方法是父组件传递给子组件的，需要考虑父组件更新而子组件未更新时，该句柄函数都会重新生成一次导致性能问题
   * 建议使用 useCallback 包装一下
   * @param todo
   */
  const addTodo = useCallback((todo: ITodo) => {
    showLog(`addTodo item:${todo}`)
    setTodoList(todoList => [...todoList, todo]);
  }, []);

  return (
    <View style={styles.container}>
      <TodoInput
        addTodo={addTodo}
        todoList={todoList}
      />
      <FlatList
        style={{marginTop:16}}
        data={todoList} renderItem={({item,index}) => <Text>{item.content}</Text> } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal:16,
  }
});