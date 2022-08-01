import React from "react";
import { Button, Text, View } from "react-native";
import { ComStyle } from "../../AppContext";



export class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  private handleClick2 = () => {
    console.log("handleClick2 --->");
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  getSwitchStatus(state:Boolean):String{
    return state ? 'ON' : 'OFF'
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={ComStyle.whiteText} onPress={this.handleClick}>
          開關 {this.getSwitchStatus(this.state.isToggleOn)}
        </Text>
        <Text style={ComStyle.whiteText} onPress={this.handleClick2}>
          不綁定this {this.getSwitchStatus(this.state.isToggleOn)}
        </Text>
        <Text style={ComStyle.whiteText} onPress={() => {this.handleClick()}}>
          箭頭函數2 {this.getSwitchStatus(this.state.isToggleOn)}
        </Text>
      </View>
    );
  }
}

export class ConditionRenderComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogin:false
    }
  }

   toggle() {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render() {
    return (
       <View>
         {this.state.isLogin ? <UserGreeting/>: <GuestGreeting/>}
         <Button title="State 使用:切换状态" onPress={() => this.toggle()}/>
       </View>
    );
  }
}

class UserGreeting extends React.Component{
  render() {
    return (
      <Text style={ComStyle.whiteText}>Welcome back</Text>
    )
  }
}

class GuestGreeting extends React.Component{
  render() {
    return (
      <Text style={ComStyle.whiteText}>Please sign in</Text>
    )
  }
}

