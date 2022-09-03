import "react-native-gesture-handler"; //一定要有
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { PATH_HOME } from "./consants/RoutConstants";
import HomePage from "../HomePage";
import { showLog } from "./util/ComUtils";


const Stack = createStackNavigator();


export default class AppNavigator extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    showLog(`AppNavigator pros:${JSON.stringify(this.props)}`);
    const obj = this.props;
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

        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
