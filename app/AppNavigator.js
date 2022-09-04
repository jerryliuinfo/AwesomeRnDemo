import "react-native-gesture-handler"; //一定要有
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PATH_ACTIVITY_INDICATOR, PATH_BUTTON, PATH_FLAT_LIST, PATH_HOME } from "./consants/RoutConstants";
import HomePage from "./HomePage";
import { showLog } from "./util/ComUtils";
import ActivityIndicatorDemo from "./component/activityindicator/ActivityIndicatorDemo";
import ButtonDemoPage from "./component/button/ButtonDemoPage";
import FlatListDemoPage from "./component/flatlist/FlatListDemoPage";


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

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
