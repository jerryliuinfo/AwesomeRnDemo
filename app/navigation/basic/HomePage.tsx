import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PATH_NAVIGATION_DETAIL } from "../../consants/NavigationConstants";
import RadiusBtn from "../../widget/RadiusBtn";
import { showLog } from "../../util/ComUtils";
import { NavigationActions, StackActions } from "@react-navigation/compat";

interface IHomePageState {
  post: string,
}

export class HomePage extends React.Component<any, IHomePageState> {

  constructor(props: any) {
    super(props);
    const { route } = this.props;
    this.state = {
      post: ""
    };

    /*  useEffect(() => {
        if (route.params.post){
          this.setState({
            post:route.params.post
          });
        }
      },[route.params.post])*/
  }


  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<IHomePageState>, snapshot?: any) {
    const { post } = this.props.route.params;
    showLog(`componentDidUpdate route params post:${post}, prevState post:${prevState.post}`)
    if (prevState.post !== post){
      this.setState({
        post:post
      })
    }
  }


  private toDetailWithParam() {
    const { navigation } = this.props;
    //方式一
   /* navigation.navigate(PATH_NAVIGATION_DETAIL, {
      itemId: 12,
      desc: "Greeting"
    });*/

    //方式2
    const navigateAction = NavigationActions.navigate({
      routeName: PATH_NAVIGATION_DETAIL,
      params: {
        itemId: 13,
        desc: "Greeting"
      },
    });
    navigation.dispatch(navigateAction)

    StackActions.reset()


  }


  private toDetailNoParam() {
    const { navigation } = this.props;
    navigation.navigate(PATH_NAVIGATION_DETAIL);
  }

  render() {
    showLog(`HomePage render:${JSON.stringify(this.props)}`);

    return (
      <View style={styles.container}>

        <Text>{this.state.post}</Text>
        {
          <RadiusBtn
            btnStyle={{ marginTop: 10 }}
            btnName={"Go to details with param"}
            onPress={() => this.toDetailWithParam()}
          />
        }
        {
          <RadiusBtn
            btnStyle={{ marginTop: 10 }}
            btnName={"Go to details with Initial params"}
            onPress={() => this.toDetailNoParam()}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
