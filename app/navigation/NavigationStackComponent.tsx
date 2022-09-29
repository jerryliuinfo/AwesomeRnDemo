import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PATH_ACCESS_NAVIGATION_PROPS,
  PATH_AUTHENTICATION,
  PATH_FULL_SCREEN_MODAL,
  PATH_NAVIGATION_COMPACT,
  PATH_NAVIGATION_CONFIG_DEFAULT_HEADER_BAR_STYLE, PATH_NAVIGATION_CUSTOM_BACK_BUTTON_BEHAVIOR,
  PATH_NAVIGATION_CUSTOM_HEADER_BAR,
  PATH_NAVIGATION_CUSTOM_HEADER_BAR_TITLE,
  PATH_NAVIGATION_DETAIL,
  PATH_NAVIGATION_HOME,
  PATH_NAVIGATION_HOME_HOOK,
  PATH_NAVIGATION_LIFE_CYCLE,
  PATH_NAVIGATION_LIST, PATH_NAVIGATION_PREVENT_GOBACK,
  PATH_NAVIGATION_STATUSBAR1,
  PATH_NAVIGATION_STATUSBAR2
} from "../consants/NavigationConstants";
import { HomePage } from "./basic/HomePage";
import { DetailPage } from "./basic/DetailPage";
import { NavigationDemoListPage } from "./NavigationDemoListPage";
import { HomePageHooks } from "./basic/HomePageHooks";
import { NavigationConfigHeaderDemoPage } from "./configure/NavigationConfigHeaderDemoPage";
import { NavigationCustomHeaderDemoPage } from "./configure/NavigationCustomHeaderDemoPage";
import { LogoTitle } from "./component/LogoTitle";
import { MyHeader } from "./component/Header";
import { MyBackButton } from "./component/MyBackButton";
import { HeaderRight } from "./component/HeaderRight";
import { NavigationLifeCycleDemoPage } from "./lifecycle/NavigationLifeCycleDemoPage";
import { NavigationFullScreenModalPage } from "./modal/NavigationFullScreenModalPage";
import { NavigationCompatDemoPage } from "./compact/NavigationCompatDemoPage";
import AuthenticationStackComponent from "./authentication/AuthenticationStackComponent";
import { StatusBarComponent1, StatusBarComponent2 } from "./statusbar/StatusBarComponent1";
import { CustomBackBehaviorScreen } from "./customback/CustomBackBehaviorScreen";
import { PreventGobackDemoPage } from "./preventgoback/PreventGobackDemoPage";
import { NavigationAccessPropsDemoPage } from "./accessprops/NavigationAccessPropsDemoPage";

const Stack = createStackNavigator();

export class NavigationStackComponent extends React.Component<any, any> {
  render() {
    return (
      <Stack.Navigator
        //指定初始页面
        initialRouteName={PATH_NAVIGATION_LIST}

        //所有的界面配置通用的标题栏样式
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e"
          },
          headerTintColor: "#fff",
          headerTitleStyle: {}
        }}
        //定义呈现和转换的样式 card :使用标准的 iOS 和 Android 屏幕切换。这是默认设置 modal
        mode={"card"}
        //指定标题栏渲染方式
        headerMode={"screen"}
      >
        <Stack.Screen
          name={PATH_NAVIGATION_LIST}
          component={NavigationDemoListPage}
          options={{ title: "Navigation 用法详解" }}

        />
        <Stack.Screen
          name={PATH_NAVIGATION_COMPACT}
          component={NavigationCompatDemoPage}
          //指定参数
          options={{
            title: "Navigation 兼容层"
          }}
        />
        <Stack.Screen
          name={PATH_NAVIGATION_HOME}
          component={HomePage}
          //指定参数
          options={{
            title: "Home",
            headerTitleStyle: {
              fontWeight: "bold"
            }
          }}
        />
        <Stack.Screen
          name={PATH_NAVIGATION_HOME_HOOK}
          component={HomePageHooks}
          //指定参数
          options={{
            title: "函数式组件"
          }}
        />
        <Stack.Screen
          name={PATH_NAVIGATION_DETAIL}
          component={DetailPage}
          //指定参数
          options={{ title: "Detail" }}
          initialParams={{ itemId: 10 }}
        />
        <Stack.Screen
          name={PATH_NAVIGATION_CONFIG_DEFAULT_HEADER_BAR_STYLE}
          component={NavigationConfigHeaderDemoPage}
          //using params in the title
          /* options={
             ({ route }) => ({ title: route.params?.customTitle })
           }*/
          options={{
            title: "我是标题栏文字",

            //配置是否显示系统默认标题栏，false 为不显示， 默认为true 显示
            headerShown:true,
            //标题栏文字显示文字，有 left 和 center 两种方式
            headerTitleAlign:'left',
            //头标题字体是否应缩放以尊重文本大小可访问性设置。默认为 false。
            headerTitleAllowFontScaling:true,
            headerBackAllowFontScaling:true,
            // headerBackAccessibilityLabel:'返回了',
            headerBackTitleVisible:false,
            //设置标题栏左侧元素
            headerLeft:props => <LogoTitle/>,
            //设置标题栏右侧元素
            headerRight:props => <HeaderRight/>,
            headerStyle:{
              backgroundColor:'#f4516e'
            },
            //设置标题栏文字样式
            headerTitleStyle: {
              fontWeight: "bold",
              color:'pink',
              fontSize:24,
            },
            //自定义 headerLeft 组件容器的样式，例如添加 padding
            headerLeftContainerStyle:{
              paddingStart:8,
            },
            //自定义 headerTitle 容器的样式，例如添加 padding
            headerTitleContainerStyle:{
              paddingStart:16
            },
            //自定义 headerRight 容器的样式，例如添加 padding
            headerRightContainerStyle:{
              paddingEnd:16,
            },
            //标题是否透明 默认为 false。如果为 true，则标头将不具有背景，除非您显式地为其提供了 headerBack。标题还将浮动在屏幕上，以便与下面的内容重叠。
            headerTransparent:false,
            //标题状态栏高度
            headerStatusBarHeight:16,
            cardStyle:{
              backgroundColor:'transparent'
            },
            //是否应在屏幕上启用过渡动画。如果设置为 false，当推或弹出时，屏幕不会显示动画。在 iOS 和 Android 上默认为 true，在 Web 上默认为 false。
            animationEnabled:false,
            animationTypeForReplace:'pop',
            //你是否可以使用手势来关闭这个屏幕。 iOS 默认为 true，Android 默认为 false。
            gestureEnabled:true,
          }}
        />
        <Stack.Screen
          name={PATH_NAVIGATION_CUSTOM_HEADER_BAR_TITLE}
          component={NavigationCustomHeaderDemoPage}
          options={{
            //定制标题栏文字
            headerTitle: props => <LogoTitle {...this.props} />,
          }}
        />

        <Stack.Screen
          name={PATH_NAVIGATION_CUSTOM_HEADER_BAR}
          component={NavigationCustomHeaderDemoPage}
          options={{
            title:'我是自定义标题栏',
            //定制标题栏文字
            header: ({ scene, previous, navigation }) => {
              const { options } = scene.descriptor;
              const title =
                options.headerTitle !== undefined
                  ? options.headerTitle
                  : options.title !== undefined
                    ? options.title
                    : scene.route.name;

              return (
                <MyHeader
                  title={title}
                  leftButton={
                    previous ? <MyBackButton /> : undefined
                  }
                  style={options.headerStyle}
                />
              );
            }

          }}
        />

        <Stack.Screen
          name={PATH_NAVIGATION_LIFE_CYCLE}
          component={NavigationLifeCycleDemoPage}
          options={{
            title:'Navigation 生命周期'
          }}
        />
        <Stack.Screen
          name={PATH_FULL_SCREEN_MODAL}
          component={NavigationFullScreenModalPage}
          options={{
            title:'Open a full screen modal'
          }}
        />

        <Stack.Screen
          name={PATH_AUTHENTICATION}
          component={AuthenticationStackComponent}
        />
        <Stack.Screen
          name={PATH_NAVIGATION_STATUSBAR1}
          component={StatusBarComponent1}
        />

        <Stack.Screen
          name={PATH_NAVIGATION_STATUSBAR2}
          component={StatusBarComponent2}
        />
        <Stack.Screen
          name={PATH_NAVIGATION_CUSTOM_BACK_BUTTON_BEHAVIOR}
          component={CustomBackBehaviorScreen}
        />


        <Stack.Screen
          name={PATH_NAVIGATION_PREVENT_GOBACK}
          component={PreventGobackDemoPage}
        />
        <Stack.Screen
          name={PATH_ACCESS_NAVIGATION_PROPS}
          component={NavigationAccessPropsDemoPage}
        />
      </Stack.Navigator>


    );
  }
}
