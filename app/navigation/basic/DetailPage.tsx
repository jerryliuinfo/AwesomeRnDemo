import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  PATH_NAVIGATION_HOME,
  PATH_NAVIGATION_DETAIL,
  PATH_NAVIGATION_HOME_HOOK
} from "../../consants/NavigationConstants";
import RadiusBtn from "../../widget/RadiusBtn";
import { showLog } from "../../util/ComUtils";


export class DetailPage extends React.Component<any, any>{

  private updateParams(){
    const {navigation} = this.props
    navigation.setParams({
      itemId:1,
      desc:'Hello'
    })
  }

  private goBack(){
    const {navigation} = this.props
    navigation.goBack()
  }

  private passDataToPreviousScreen(){
    const {navigation} = this.props
    navigation.navigate(PATH_NAVIGATION_HOME,{
      post: 'Hello world',
      merge: true,
    })
  }

  private passDataToFunctionalComponent(){
    const {navigation} = this.props
    navigation.navigate(PATH_NAVIGATION_HOME_HOOK,{
      post: 'Hello world',
      // count: 10,
    })
  }

  render() {
    const {navigation,route} = this.props
    showLog(`DetailPage render:${JSON.stringify(this.props)}`)
    let itemId, desc
    if (route.params){
      itemId = route.params.itemId
      desc = route.params.desc
    }
    return (
        <View style={styles.container} >
          <Text style={[styles.text,{marginTop:50}]}>{`detail page id:${itemId}, desc:${desc}`}</Text>
          {
            <RadiusBtn
              btnStyle={{marginTop:10}}
              btnName={'Go to details again'}
              onPress={() => navigation.push(PATH_NAVIGATION_DETAIL)}
            />
          }
          {
            <RadiusBtn
              btnStyle={{marginTop:10}}
              btnName={'Go Back'}
              onPress={() => this.goBack()}
            />
          }
          {
            <RadiusBtn
              btnStyle={{marginTop:10}}
              btnName={'Update params'}
              onPress={() => this.updateParams()}
            />
          }

          {
            <RadiusBtn
              btnStyle={{marginTop:10}}
              btnName={'Passing params to previous screen'}
              onPress={() => this.passDataToPreviousScreen()}
            />
          }

          {
            <RadiusBtn
              btnStyle={{marginTop:10}}
              btnName={'Passing params to functional component screen'}
              onPress={() => this.passDataToFunctionalComponent()}
            />
          }
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:26,
    color:'black'
  }
})
