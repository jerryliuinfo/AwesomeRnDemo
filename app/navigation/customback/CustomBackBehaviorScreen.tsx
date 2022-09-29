import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { BackHandler, Text, View } from "react-native";
import { showLog, showToast } from "../../util/ComUtils";
import RadiusBtn from "../../widget/RadiusBtn";
import { PATH_NAVIGATION_DETAIL } from "../../consants/NavigationConstants";


export const CustomBackBehaviorScreen = () => {

  const [isSelectionModeEnabled, disableSelectionMode] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (isSelectionModeEnabled) {
          disableSelectionMode(false);
          return true;
        } else {
          return false;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [isSelectionModeEnabled, disableSelectionMode])
  );


  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>自定义返回按钮处理</Text>
      {
        <RadiusBtn
          btnStyle={{marginTop:10}}
          btnName={'设置为选择模式'}
          onPress={() => disableSelectionMode((true))}
        />
      }
      {
        <RadiusBtn
          btnStyle={{marginTop:10}}
          btnName={'设置为列表模式'}
          onPress={() => disableSelectionMode((false))}
        />
      }
    </View>
  )
};
