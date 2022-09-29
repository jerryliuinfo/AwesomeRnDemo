/**
 * Created by huangjunsheng on 2019-10-04
 */

import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { getWindowHeight, getWindowWidth } from "../util/ComUtils";

export interface ILoadingViewProps{
  isShowLoading:boolean,
}

class LoadingView extends Component<ILoadingViewProps> {

  render() {
    const {isShowLoading} = this.props;
    if (!isShowLoading) {
      return null;
    }
    return (
        <View style={styles.LoadingPage}>
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#FFF" />
            <Text style={{ marginLeft: 10,color:"#FFF",marginTop:10 }}>正在加载...</Text>
          </View>
        </View>
    );
  }
}





const styles = StyleSheet.create({
  LoadingPage: {
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#00000000",
    width: getWindowWidth(),
    height: getWindowHeight(),
    justifyContent: "center",
    alignItems: "center",
  },
  container:{
    width: 100,
    height: 100,
    backgroundColor: "rgba(0,0,0,0.6)",
    opacity: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:7
  }
});



export default LoadingView;
