import React from "react";
import { Text, View } from "react-native";
import RadiusBtn from "../../widget/RadiusBtn";
import * as actions from "./action/AuthenticationActions";
import { connect } from "react-redux";


 class SettingScreen extends React.Component<any, any>{
  render() {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text>Logined</Text>
        {
          <RadiusBtn
            btnStyle={{marginTop:10}}
            btnName={'Sign out'}
            onPress={() => this.props.signOut() }
          />
        }
      </View>
    );
  }
}
function mapStateToProps(state: any) {
  return {

  }
};


function mapDispatchToProps(dispatch: Function, ownProps: any) {
  return {
    signOut: () => dispatch(actions.signOut()),  }
}
//使用connect组件对 Component 进行包装，以便组件内能调用dispatch以及读取state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingScreen)
