import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { PATH_AUTHENTICATION_SETTING, PATH_AUTHENTICATION_SIGN_IN } from "../../consants/NavigationConstants";
import { connect } from "react-redux";
import { SplashScreen } from "./SplashScreen";

import * as actions from "./action/AuthenticationActions";
import LoginScreen from "./LoginScreen";
import SettingScreen from "./SettingScreen";

const Stack = createStackNavigator();

interface IHomePageProps {
  isLoading: boolean,
  isSignOut: boolean,
  token:string,
  initPage:() => void

}
 class AuthenticationStackComponent extends React.Component<IHomePageProps, any> {
  render() {
    const {isLoading,isSignOut} = this.props
    if (isLoading){
      return <SplashScreen/>
    }

    return (
      <Stack.Navigator
      >
        {
          !isSignOut?(
            <>
              <Stack.Screen name={PATH_AUTHENTICATION_SETTING} component={SettingScreen} options={{title:'设置' ,headerShown:false}} />
            </>
          ):(
            <>
              <Stack.Screen name={PATH_AUTHENTICATION_SIGN_IN} component={LoginScreen} options={{
                title:'登录' ,
                headerShown:false,
                animationTypeForReplace: isSignOut ? 'pop' : 'push',
              }
              }
              />
            </>
          )
        }
      </Stack.Navigator>
    );
  }

  componentDidMount() {
    this.props.initPage()
  }
}
function mapStateToProps(state: any) {
  return {
    isLoading: state.auth.isLoading,
    isSignOut: state.auth.isSignOut,
    token: state.auth.token,
  }
};


function mapDispatchToProps(dispatch: Function, ownProps: any) {
  return {
    initPage: () => dispatch(actions.checkToken()),
  }
}
//使用connect组件对 Component 进行包装，以便组件内能调用dispatch以及读取state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticationStackComponent)
