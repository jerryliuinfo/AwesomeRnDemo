import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { showLog } from "../../util/ComUtils";
import * as actions from "./action/AuthenticationActions";
import { connect } from "react-redux";
import RadiusBtn from "../../widget/RadiusBtn";

export interface ILoginScreenProps {
  doLogin: (username:string,pwd:string) => void,
}

export interface ILoginScreenState {
  username: string,
  password: string,
}

 class LoginScreen extends React.Component<ILoginScreenProps, ILoginScreenState> {

  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  private signIn({ username, password }: { username: string, password: string }) {
    showLog(`signIn username:${username}, password:${password}`);
    this.props.doLogin(username,password)
  }


  render() {
    const { username, password } = this.state;
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          value={username}
          onChangeText={(text: string) => {
            this.setState({
              username: text
            });
          }}
        />
        <TextInput
          style={[styles.textInput, {marginTop:10}]}
          placeholder="Password"
          value={password}
          onChangeText={(text: string) => {
            this.setState({
              password: text
            });
          }}
        />
        {
          <RadiusBtn
            btnStyle={{marginTop:10}}
            btnName={'Sign in'}
            onPress={() => this.signIn({ username, password })}
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
    doLogin: (username:string,pwd:string) => dispatch(actions.doLogin(username,pwd)),  }
}
//使用connect组件对 Component 进行包装，以便组件内能调用dispatch以及读取state
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1.33,
    borderColor: "#9EC53E",
    backgroundColor: '#fffdfdfd',
    width: 373,
    height: 43,
    color:'black',
    borderRadius: 21,
    paddingStart: 16,
    paddingEnd: 2,
  },
})
