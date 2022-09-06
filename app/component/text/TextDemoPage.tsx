import React from "react";
import { LayoutChangeEvent, StyleSheet, Text, View } from "react-native";
import { showLog, showToast } from "../../util/ComUtils";


export class TextDemoPage extends React.Component<any, any> {

  private _onLayout(event: LayoutChangeEvent) {
    const { x, y, width, height } = event.nativeEvent.layout;
    showLog(`onLayout x:${x}, y:${y}, width:${width}, height:${height}`);
  }

  private _onPress() {
    showToast(`onPress`);
  }

  private _onLongPress() {
    showToast(`onLongPress`);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.baseText}>
          I am bold
          <Text
            style={styles.innerText}
            accessibilityHint={"Red"}
            //决定用户是否可以长按选择文本，以便复制和粘贴。
            selectable={true}

          > and red</Text>
        </Text>
        <Text
          style={styles.longText}
          //这个属性通常和下面的 numberOfLines 属性配合使用，表示当 Text 组件无法全部显示需要显示的字符串时如何用省略号进行修饰
          ellipsizeMode={"head"}
          //用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制。
          numberOfLines={2}
          //在加载时或者布局变化以后调用
          onLayout={(event) => {
            this._onLayout(event);
          }}
          onPress={() => this._onPress()}
          onLongPress={() => this._onLongPress()}
          //控制字体是否要根据系统的“字体大小”辅助选项来进行缩放。默认值为true
          allowFontScaling={false}

          //The highlight color of the text.
          selectionColor={'#ff0000'}

        >
          I am a long text,I am a long text,I am a long text,I am a long text, am a long text, am a long text,</Text>
      </View>

    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  baseText: {
    fontWeight: "bold"
  },
  innerText: {
    color: "red"
    // fontSize:26,
  },
  longText: {
    width: 300,
    marginTop: 20,
    fontStyle:'italic',

    //行高
    // backgroundColor:'red',
    textAlign:'center',
    textDecorationLine:'underline',
    textShadowRadius:10,
    letterSpacing:10,
    lineHeight:40,
  }
});
