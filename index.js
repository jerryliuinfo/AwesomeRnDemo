/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import configureStore from "./app/store/store";
import AppNavigator from "./app/AppNavigator";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppNavigator {...this.props} />
      </Provider>
    );
  }
}
AppRegistry.registerComponent(appName, () => App);



