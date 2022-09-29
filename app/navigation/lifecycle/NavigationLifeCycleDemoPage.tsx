import React, { useCallback, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { showLog } from "../../util/ComUtils";
import RadiusBtn from "../../widget/RadiusBtn";
import {
  PATH_NAVIGATION_DEMO,
  PATH_NAVIGATION_DETAIL,
  PATH_NAVIGATION_LIFE_CYCLE
} from "../../consants/NavigationConstants";
import { RouteProp, useFocusEffect, useIsFocused, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

interface ILifeCycleDemoPageProps {
  route: any,
  navigation: any,
}


// export  const NavigationLifeCycleDemoPage = (navigation:any) => {
//  export default function NavigationLifeCycleDemoPage({ navigation }) {
//   export default (props: ILifeCycleDemoPageProps) => {
/*interface IProps {
  navigation:any
}*/
type IProps = React.PropsWithChildren<{ navigation: any; age: number; }>

// export function NavigationLifeCycleDemoPage() {
export const NavigationLifeCycleDemoPage = (props:IProps) => {

  /*useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // Screen was focused
      // Do something
      showLog(`useEffect focus`)


    });
    return unsubscribe;
  },[props.navigation])*/

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      showLog(`useFocusEffect on screen focused-->`)
      return () => {
        showLog(`useFocusEffect on screen lose focuse-->`)
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  return (
    <View style={styles.container}>
      {
        <RadiusBtn
          btnStyle={{ marginTop: 10 }}
          btnName={"Go to details2 "}
          onPress={() => {
            props.navigation.navigate(PATH_NAVIGATION_DETAIL)}
          }
        />
      }
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }

});

