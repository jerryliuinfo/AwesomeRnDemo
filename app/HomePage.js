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
  PATH_FLAT_LIST,
  PATH_IMAGE,
  PATH_IMAGE_BACKGROUND, PATH_KEYBOARD, PATH_MODAL,
} from "./consants/RoutConstants";

class HomePage extends React.Component {

  render() {
    const {navigation} = this.props
    return <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
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
