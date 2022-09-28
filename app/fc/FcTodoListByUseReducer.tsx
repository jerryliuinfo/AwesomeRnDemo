import React, { FC, ReactElement, useCallback, useEffect, useReducer } from "react";
import { AsyncStorage, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { TodoInput } from "./TodoInput";
import { ITodo } from "../bean/ITodo";
import { showLog } from "../util/ComUtils";
import { todoReducer } from "./reducer/TodoReducer";
import { ACTION_TYPE, IState } from "./typings/IState";


// const InitState:ITodoState ={
//   todoList:[],
// }

function init (initTodoList: ITodo[]): IState {
  return {
    todoList: initTodoList
  }
}
/**
 * 使用 useReducer 替代 useState
 * @constructor
 */
const TodoList: FC = (): ReactElement => {

  // const [todoList, setTodoList] = useState<ITodoItem[]>([]);
  //用 useReducer 代替 useState
  const [ state, dispatch ] = useReducer(todoReducer,[], init);

  //只会在 组件第一次被挂在的时候执行
  useEffect(() => {
    AsyncStorage.getItem('todolist').then((res) => {
      const todoList =  JSON.parse(res || '[]') ;
      dispatch({
        type:ACTION_TYPE.INIT_TODOLIST,
        payload:todoList
      })

    })
  }, []);

  useEffect(() => {
    showLog(`todoList:${JSON.stringify(state.todoList)}`)
    AsyncStorage.setItem('todoList',JSON.stringify(state.todoList) )


  }, [state.todoList])

  /**
   * 注意，这个方法是父组件传递给子组件的，需要考虑父组件更新而子组件未更新时，该句柄函数都会重新生成一次导致性能问题
   * 建议使用 useCallback 包装一下
   * @param todo
   */
  const addTodo = useCallback((todo: ITodo) => {
    showLog(`addTodo item:${todo}`)
    // setTodoList(todoList => [...todoList, todo]);
  }, []);

  return (
    <View style={styles.container}>
      <TodoInput
        addTodo={addTodo}
        todoList={state.todoList}
      />
      <FlatList
        style={{marginTop:16}}
        data={state.todoList} renderItem={({item,index}) => <Text>{item.content}</Text> } />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingHorizontal:16,
  }
});