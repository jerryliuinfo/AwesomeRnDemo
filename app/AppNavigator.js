import "react-native-gesture-handler"; //一定要有
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  PATH_ACTIVITY_INDICATOR,
  PATH_BUTTON,
  PATH_FLAT_LIST,
  PATH_HOME,
  PATH_IMAGE,
  PATH_IMAGE_BACKGROUND,
  PATH_KEYBOARD,
  PATH_MODAL,
  PATH_PRESSABLE,
  PATH_REFRESH_CONTROL,
  PATH_SCROLLVIEW,
  PATH_SECTION_LIST, PATH_STATUSBAR, PATH_SWITCH, PATH_TEXT, PATH_TEXT_INPUT,
} from "./consants/RoutConstants";
import HomePage from "./HomePage";
import { showLog } from "./util/ComUtils";
import ActivityIndicatorDemo from "./component/activityindicator/ActivityIndicatorDemo";
import ButtonDemoPage from "./component/button/ButtonDemoPage";
import FlatListDemoPage from "./component/flatlist/FlatListDemoPage";
import { ImageDemoPage } from "./component/image/ImageDemoPage";
import { ImageBackgroundDemoPage } from "./component/imagebackground/ImageBackgroundDemoPage";
import { KeyboardAvoidingViewDemoPage } from "./component/keyboard/KeyboardAvoidingViewDemoPage";
import { ModalDemoPage } from "./component/modal/ModalDemoPage";
import { PressableDemoPage } from "./component/pressable/PressableDemoPage";
import { RefreshControlDemoPage } from "./component/refreshcontrol/RefreshControlDemoPage";
import { ScrollViewDemoPage } from "./component/scrollview/ScrollViewDemoPage";
import { SectionListDemoPage } from "./component/sectionlist/SectionListDemoPage";
import { StatusBarDemoPage } from "./component/statusbar/StatusBarDemoPage";
import { SwitchDemoPage } from "./component/switch/SwitchDemoPage";
import { TextDemoPage } from "./component/text/TextDemoPage";
import { TextInputDemoPage } from "./component/textinput/TextInputDemoPage";


const Stack = createStackNavigator();


export default class AppNavigator extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    showLog(`AppNavigator pros:${JSON.stringify(this.props)}`);
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={PATH_HOME}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name={PATH_HOME}
            component={HomePage}
          />
          <Stack.Screen
            name={PATH_ACTIVITY_INDICATOR}
            component={ActivityIndicatorDemo}
          />

          <Stack.Screen
            name={PATH_BUTTON}
            component={ButtonDemoPage}
          />

          <Stack.Screen
            name={PATH_FLAT_LIST}
            component={FlatListDemoPage}
          />
          <Stack.Screen
            name={PATH_IMAGE}
            component={ImageDemoPage}
          />
          <Stack.Screen
            name={PATH_IMAGE_BACKGROUND}
            component={ImageBackgroundDemoPage}
          />
          <Stack.Screen
            name={PATH_KEYBOARD}
            component={KeyboardAvoidingViewDemoPage}
          />
          <Stack.Screen
            name={PATH_MODAL}
            component={ModalDemoPage}
          />
          <Stack.Screen
            name={PATH_PRESSABLE}
            component={PressableDemoPage}
          />
          <Stack.Screen
            name={PATH_REFRESH_CONTROL}
            component={RefreshControlDemoPage}
          />
          <Stack.Screen
            name={PATH_SCROLLVIEW}
            component={ScrollViewDemoPage}
          />
          <Stack.Screen
            name={PATH_SECTION_LIST}
            component={SectionListDemoPage}
          />
          <Stack.Screen
            name={PATH_STATUSBAR}
            component={StatusBarDemoPage}
          />
          <Stack.Screen
            name={PATH_SWITCH}
            component={SwitchDemoPage}
          />
          <Stack.Screen
            name={PATH_TEXT}
            component={TextDemoPage}
          />
          <Stack.Screen
            name={PATH_TEXT_INPUT}
            component={TextInputDemoPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
