/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import SectionComponent from "./component/common/SectionComponent";
import {
  PATH_ACTIVITY_INDICATOR,
  PATH_BUTTON,
  PATH_FLAT_LIST, PATH_FLEX_VERIFY_PWD, PATH_FLEX_DICE, PATH_FLEX_GRAMMAR,
  PATH_IMAGE,
  PATH_IMAGE_BACKGROUND,
  PATH_KEYBOARD,
  PATH_MODAL,
  PATH_PRESSABLE,
  PATH_REFRESH_CONTROL,
  PATH_SCROLLVIEW,
  PATH_SECTION_LIST,
  PATH_STATUSBAR,
  PATH_SWITCH,
  PATH_TEXT,
  PATH_TEXT_INPUT,
  PATH_TOUCHABLE_HIGHLIGHT,
  PATH_TOUCHABLE_OPACITY, PATH_FLEX_ALIGN_CONTENT_SELF, PATH_FC_TODO,
} from "./consants/RoutConstants";

class HomePage extends React.Component {

  componentDidMount() {
    setTimeout(() =>{
      this.refs.rootView.scrollTo({x:0,y:2000})
    }, 500)
  }


  render() {
    const {navigation} = this.props
    return <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={"rootView"}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <SectionComponent
              title={'ActivityIndicator'}
              desc={'显示一个圆形的 loading 提示符号'}
              onPress={() =>{navigation.navigate(PATH_ACTIVITY_INDICATOR)}}
            />
            <SectionComponent
              title={'Button'}
              desc={'一个可点击的按钮'}
              onPress={() =>{navigation.navigate(PATH_BUTTON)}}
            />

            <SectionComponent
              title={'FlatList'}
              desc={'高性能的简单列表组件'}
              onPress={() =>{navigation.navigate(PATH_FLAT_LIST)}}
            />
            <SectionComponent
              title={'Image'}
              desc={'用于显示多种不同类型图片的 React 组件'}
              onPress={() =>{navigation.navigate(PATH_IMAGE)}}
            />
            <SectionComponent
              title={'ImageBackground'}
              desc={'用于展示背景图片'}
              onPress={() =>{navigation.navigate(PATH_IMAGE_BACKGROUND)}}
            />
            <SectionComponent
              title={'KeyBoardAvoidingView'}
              desc={'自动根据键盘的高度，调整自身的 height 或底部的 padding，以避免被遮挡'}
              onPress={() =>{navigation.navigate(PATH_KEYBOARD)}}
            />
            <SectionComponent
              title={'Modal'}
              desc={'一种简单的覆盖在其他视图之上显示内容的方式'}
              onPress={() =>{navigation.navigate(PATH_MODAL)}}
            />
            <SectionComponent
              title={'Pressable'}
              desc={'Pressable 是一个核心组件的封装，它可以检测到任意子组件的不同阶段的按压交互情况'}
              onPress={() =>{navigation.navigate(PATH_PRESSABLE)}}
            />
            <SectionComponent
              title={'RefreshControl'}
              desc={'RefreshControl组件可以用在 ScrollView 或 FlatList 内部，为其添加下拉刷新的功能'}
              onPress={() =>{navigation.navigate(PATH_REFRESH_CONTROL)}}
            />
            <SectionComponent
              title={'ScrollView'}
              desc={'一个封装了平台的 ScrollView（滚动视图）的组件，同时还集成了触摸锁定的“响应者”系统'}
              onPress={() =>{navigation.navigate(PATH_SCROLLVIEW)}}
            />
            <SectionComponent
              title={'SectionList'}
              desc={'高性能的分组(section)列表组件，支持下面这些常用的功能'}
              onPress={() =>{navigation.navigate(PATH_SECTION_LIST)}}
            />
            <SectionComponent
              title={'StatusBar'}
              desc={'控制应用状态栏的组件'}
              onPress={() =>{navigation.navigate(PATH_STATUSBAR)}}
            />
            <SectionComponent
              title={'Switch'}
              desc={'跨平台通用的“开关”组件'}
              onPress={() =>{navigation.navigate(PATH_SWITCH)}}
            />
            <SectionComponent
              title={'Text'}
              desc={'一个用于显示文本的 React 组件'}
              onPress={() =>{navigation.navigate(PATH_TEXT)}}
            />
            <SectionComponent
              title={'TouchableHighlight'}
              desc={'本组件用于封装视图，使其可以正确响应触摸操作'}
              onPress={() =>{navigation.navigate(PATH_TOUCHABLE_HIGHLIGHT)}}
            />
            <SectionComponent
              title={'TouchableOpacity'}
              desc={'用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低'}
              onPress={() =>{navigation.navigate(PATH_TOUCHABLE_OPACITY)}}
            />
            <SectionComponent
              title={'Flex JustifyContent'}
              desc={'JustifyContent"'}
              onPress={() =>{navigation.navigate(PATH_FLEX_GRAMMAR)}}
            />
            <SectionComponent
              title={'flex-grow'}
              desc={'flex-grow"'}
              onPress={() =>{navigation.navigate(PATH_FLEX_ALIGN_CONTENT_SELF)}}
            />


            <SectionComponent
              title={'Flex布局'}
              desc={'键盘布局'}
              onPress={() =>{navigation.navigate(PATH_FLEX_VERIFY_PWD)}}
            />
            <SectionComponent
              title={'Flex骰子布局'}
              desc={'Flex骰子布局'}
              onPress={() =>{navigation.navigate(PATH_FLEX_DICE)}}
            />

            <SectionComponent
              title={'函数式组件'}
              desc={'函数式组件TodoListDemo'}
              onPress={() =>{navigation.navigate(PATH_FC_TODO)}}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});


export default HomePage;
