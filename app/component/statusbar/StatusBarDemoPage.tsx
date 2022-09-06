import React from "react";
import { Button, StatusBar, StatusBarStyle, StyleSheet, Text, View, ViewStyle } from "react-native";

interface IStatusBarState{
  styleTypes:Array<StatusBarStyle>,
  statusBarVisible:boolean,
  style:StatusBarStyle,
}

/**
 * StatusBar可以在任意视图中加载，可以放置多个且后加载的会覆盖先加载的。因此在配合导航器使用时，请务必考虑清楚StatusBar的放置顺序
 */
export class StatusBarDemoPage extends React.Component<any, IStatusBarState>{

  constructor(props:any) {
    super(props);

    this.state = {
      styleTypes:['default','dark-content','light-content'],
      style:'default',
      statusBarVisible:false,
    }
  }

 /* statusBarHint = ():string => {
    const {style,styleTypes} = this.state
    if (style === StatusBarStyleTypes.DEFAULT){
      return 'default'
    }else if (style === StatusBarStyleTypes.DARK_CONTENT){
      return 'dark-content'
    }else {
      return 'light-content'
    }
  }*/

  changeVisibilityStatusBar = () => {
    this.setState({
      statusBarVisible:!this.state.statusBarVisible
    });
  }

  changeStyleStatusBar = () => {
    const {styleTypes,style} = this.state
    const styleId = styleTypes.indexOf(style) + 1
    let currentStyle: StatusBarStyle
    if (styleId === styleTypes.length){
      currentStyle = styleTypes[0]
    }else {
      currentStyle = styleTypes[styleId]
    }
    this.setState({
      style:currentStyle
    });
  }

  render() {
    const {styleTypes,statusBarVisible,style} = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>StatusBar Style: {style}</Text>
        <Text style={styles.textStyle}>StatusBar Visibility: {!statusBarVisible ? 'Visible': 'Hidden'}</Text>
        {/*<StatusBar backgroundColor="blue" barStyle={style} />*/}
        <View>
          <StatusBar
            //指定状态栏的变化是否应以动画形式呈现
            animated={true}
            //是否隐藏状态栏。
            hidden={statusBarVisible}
            networkActivityIndicatorVisible={true}
            backgroundColor="blue"
            barStyle={style}
            showHideTransition={'slide'}
            //指定状态栏是否透明。设置为 true 时，应用会延伸到状态栏之下绘制
            translucent={true}
            />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Toggle StatusBar" onPress={() => this.changeVisibilityStatusBar()} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Change StatusBar Style" onPress={() => this.changeStyleStatusBar()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ECF0F1',
    padding: 8
  },
  buttonContainer:{
    padding: 10
  },
  textStyle:{
    textAlign: 'center'
  }
});
