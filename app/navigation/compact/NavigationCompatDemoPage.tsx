import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RadiusBtn from "../../widget/RadiusBtn";
import { NavigationActions, StackActions } from "@react-navigation/compat";
import { PATH_NAVIGATION_COMPACT, PATH_NAVIGATION_DETAIL } from "../../consants/NavigationConstants";


export class NavigationCompatDemoPage extends React.Component<any, any> {

  render() {
    const { title } = this.props.route.params;

    return (
      <View style={styles.container}>
        <Text>Param:{title}</Text>
        <Text>NavigationAction 用法</Text>

        <View style={{flexDirection:'row', flexWrap:'wrap',marginHorizontal:16, justifyContent:'space-between'}}>
          {
            <RadiusBtn
              btnStyle={{ marginTop: 10 }}
              btnName={"NavigationAction navigate"}
              onPress={() => this.navigationNavigate()}
            />
          }
          {
            <RadiusBtn
              btnStyle={{ marginTop: 10 }}
              btnName={"NavigationAction back"}
              onPress={() => this.navigationBack()}
            />
          }
          {
            <RadiusBtn
              btnStyle={{ marginTop: 10 }}
              btnName={"NavigationActions setParams"}
              onPress={() => this.navigationSetParams()}
            />
          }

          {
            <RadiusBtn
              btnStyle={{ marginTop: 10 }}
              btnName={"StackActions pop"}
              onPress={() => this.stackNavigationPop()}
            />
          }
          {
            <RadiusBtn
              btnStyle={{ marginTop: 10 }}
              btnName={"StackActions push"}
              onPress={() => this.stackNavigationPush()}
            />
          }
          {
            <RadiusBtn
              btnStyle={{ marginTop: 10 }}
              btnName={"StackActions PopToTop"}
              onPress={() => this.stackNavigationPopToTop()}
            />
          }
          {
            <RadiusBtn
              btnStyle={{ marginTop: 10 }}
              btnName={"StackActions Reset"}
              onPress={() => this.stackNavigationReset()}
            />
          }
        </View>


      </View>
    );
  }

  private navigationNavigate() {
    const {navigation} = this.props;
    const navigateAction = NavigationActions.navigate({
      routeName: PATH_NAVIGATION_DETAIL,
      params: {
        itemId: 13,
        desc: "Hello World"
      }
    });
    navigation.dispatch(navigateAction);
  }

  private navigationBack() {
    const {navigation} = this.props;
    // const navigateAction = NavigationActions.back();
    // navigation.dispatch(navigateAction);
    navigation.dispatch(NavigationActions.back());
  }

  private stackNavigationPop() {
    const {navigation} = this.props;
    navigation.dispatch(StackActions.pop({n:2}));
  }
  private stackNavigationPush() {
    const {navigation} = this.props;
    navigation.dispatch(StackActions.push({
      routeName:PATH_NAVIGATION_COMPACT,
      params:{
        itemId: 13,
      }
    }));

  }

  private stackNavigationPopToTop() {
    const {navigation} = this.props;
    navigation.dispatch(StackActions.popToTop());
  }

  private stackNavigationReset() {
    const {navigation} = this.props;

  }

  private navigationSetParams() {

  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
