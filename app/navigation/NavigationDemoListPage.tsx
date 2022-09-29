import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import SectionComponent from "../component/common/SectionComponent";
import { PATH_ACTIVITY_INDICATOR } from "../consants/RoutConstants";
import {
  PATH_ACCESS_NAVIGATION_PROPS,
  PATH_AUTHENTICATION,
  PATH_FULL_SCREEN_MODAL,
  PATH_NAVIGATION_COMPACT,
  PATH_NAVIGATION_CONFIG_DEFAULT_HEADER_BAR_STYLE,
  PATH_NAVIGATION_CUSTOM_BACK_BUTTON_BEHAVIOR,
  PATH_NAVIGATION_CUSTOM_HEADER_BAR,
  PATH_NAVIGATION_CUSTOM_HEADER_BAR_TITLE,
  PATH_NAVIGATION_HOME,
  PATH_NAVIGATION_LIFE_CYCLE, PATH_NAVIGATION_PREVENT_GOBACK,
  PATH_NAVIGATION_STATUSBAR1
} from "../consants/NavigationConstants";


export class NavigationDemoListPage extends React.Component<any, any> {
  render() {
    const {navigation} = this.props
    return <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={"rootView"}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>


          <View style={styles.body}>
            <SectionComponent
              title={'Navigation基本用法'}
              desc={'Navigation 跳转、指定参数、传递参数'}
              onPress={() =>{navigation.navigate(PATH_NAVIGATION_HOME)}}
            />
            <SectionComponent
              title={'Navigation 兼容库'}
              desc={'Navigation 兼容库'}
              onPress={() =>{navigation.navigate(PATH_NAVIGATION_COMPACT,{
                title:'Jerry'
              })}}
            />

            <SectionComponent
              title={'配置默认标题栏样式'}
              desc={'配置默认标题栏样式'}
              onPress={() =>{navigation.navigate(PATH_NAVIGATION_CONFIG_DEFAULT_HEADER_BAR_STYLE, {
                customTitle:'我是route传递的标题'
              })}}
            />

            <SectionComponent
              title={'自定义标题栏文字'}
              desc={'使用自定义标题栏组件替代系统默认的标题栏文字'}
              onPress={() =>{navigation.navigate(PATH_NAVIGATION_CUSTOM_HEADER_BAR_TITLE)}}
            />
            <SectionComponent
              title={'自定义标题栏'}
              desc={'使用自定义标题栏组件完全替代系统默认的标题栏'}
              onPress={() =>{navigation.navigate(PATH_NAVIGATION_CUSTOM_HEADER_BAR)}}
            />

            <SectionComponent
              title={'Navigation lifecycle'}
              desc={'Navigation 生命周期'}
              onPress={() =>{navigation.navigate(PATH_NAVIGATION_LIFE_CYCLE)}}
            />

            <SectionComponent
              title={'Navigation FullScreen Modal'}
              desc={'打开全屏的 Modal'}
              onPress={() =>{navigation.navigate(PATH_FULL_SCREEN_MODAL)}}
            />
            <SectionComponent
              title={'Navigation Authentication '}
              desc={'授权'}
              onPress={() =>{navigation.navigate(PATH_AUTHENTICATION)}}
            />
            <SectionComponent
              title={'Navigation Status bar configuration '}
              desc={'状态栏配置'}
              onPress={() =>{navigation.navigate(PATH_NAVIGATION_STATUSBAR1)}}
            />

            <SectionComponent
              title={'Navigation custom back button'}
              desc={'自定义返回按钮'}
              onPress={() =>{navigation.navigate(PATH_NAVIGATION_CUSTOM_BACK_BUTTON_BEHAVIOR)}}
            />
            <SectionComponent
              title={'Navigation prevent go back'}
              desc={'拦截返回按钮'}
              onPress={() =>{navigation.navigate(PATH_NAVIGATION_PREVENT_GOBACK)}}
            />
            <SectionComponent
              title={'Access the navigation prop from any component'}
              desc={'在任何 Component 访问 navigation 属性'}
              onPress={() =>{navigation.navigate(PATH_ACCESS_NAVIGATION_PROPS)}}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  }
}



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
