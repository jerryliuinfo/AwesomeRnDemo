"use strict";

import React, { Component } from "react";
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import * as actions from "../actions/counterActions";
import { connect } from "react-redux";
import { showLog, showToast } from "../../util/ComUtils";

interface ICountProps {
  count: number,
  increment: () => void
  decrement: () => void
}


class CounterApp extends Component<ICountProps> {

  render() {
    const { count } = this.props;
    showLog(`CounterApp props : ${JSON.stringify(this.props)}, count:${count}`);
    return (
      <View style={
        styles.container
      }>
        <Text style={{ color: "black" }}>值:{count}</Text>

        <TouchableHighlight onPress={() => {
          this.props.increment();
        }} style={styles.button}>
          <Text>up</Text>
        </TouchableHighlight>

        <TouchableOpacity onPress={() => this.props.decrement()} style={styles.button}>
          <Text>down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state: any, ownProps: any) {
  return {
    count: state.countReducer.count
  };
};

function mapDispatchToProps(dispatch: Function, ownProps: any) {
  return {
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement())
  };
}


//使用connect组件对 Component 进行包装，以便组件内能调用dispatch以及读取state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterApp);


const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white"
  },
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    margin: 3
  }
});
