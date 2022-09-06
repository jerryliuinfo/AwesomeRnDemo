import React from "react";
import {
  Button,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputContentSizeChangeEventData, TextInputSelectionChangeEventData,
  View
} from "react-native";
import { showLog } from "../../util/ComUtils";


interface ITextInputState {
  value: string;
}

export class TextInputDemoPage extends React.Component<any, ITextInputState> {

  constructor(props: any) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    const { value } = this.state;
    return (
      <View style={[styles.container, { backgroundColor: "gray" }]}>

        <TextInput
          style={[styles.inputText]}
          value={value}
          onChangeText={(text) => {
            this.setState({
              value: text
            });
          }}
          //如果没有任何文字输入，会显示此字符串。
          placeholder={'This is place hold text'}
          //占位字符串显示的文字颜色。
          placeholderTextColor={'#ff0000'}
          //控制字体是否要根据系统的“字体大小”辅助选项来进行缩放。默认值为true。
          allowFontScaling={false}
          //控制 TextInput 是否要自动将特定字符切换为大写
          autoCapitalize={"words"}

          autoComplete={"email"}
          //如果为 true，在componentDidMount后会获得焦点。默认值为 false。
          autoFocus={true}
          //如果为 true，文本框会在提交的时候失焦。对于单行输入框默认值为 true，多行则为 false
          blurOnSubmit={true}
          //如果为 true，则隐藏光标。默认值为 false。
          caretHidden={false}
          clearButtonMode={"always"}
          //文本框是否可编辑
          editable={true}
          //指定键盘的颜色。
          keyboardAppearance={"dark"}
          //决定弹出何种软键盘类型，譬如numeric（纯数字键盘）。
          // keyboardType={'phone-pad'}
          //限制文本框中最多的字符数。使用这个属性而不用 JS 逻辑去实现，可以避免闪烁的现象。
          maxLength={20}
          //如果为 true，文本框中可以输入多行文字。默认值为 false。注意安卓上如果设置multiline = {true}，文本默认会垂直居中，可设置textAlignVertical: 'top'样式来使其居顶显示。
          // multiline={true}
          // numberOfLines={3}
          onFocus={() => {
            showLog(`onFocus --->`);
          }}
          //当文本框失去焦点的时候调用此回调函数。
          onBlur={() => {
            showLog(`onBlur --->`);
          }}
          onEndEditing={() => {
            showLog(`onEndEditing`);
          }}
          onKeyPress={() => {
            showLog(``)
          }}
          onContentSizeChange={(event) => this._onContentSizeChange(event)}
          onSelectionChange={(event) => {this._onSelectionChange(event)}}

          returnKeyLabel={'return'}
          //如果为 true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全。默认值为 false。multiline={true}时不可用。
          secureTextEntry={false}
          // selection={{start:3}}
          selectionColor={'#00ff23'}
          selectTextOnFocus={true}
          //将输入文本对齐到输入字段的左侧、中间或右侧。默认左对齐
          textAlign={'left'}
          underlineColorAndroid={'#0000ff'}
        />

        <TextInput
          style={{ marginTop: 16 }}
          placeholder={"input here"}
        />

      </View>
    );
  }

  private _onContentSizeChange(event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) {
    const { width, height } = event.nativeEvent.contentSize;
    showLog(`width:${width}, height:${height}`);
  }

  private _onSelectionChange(event: NativeSyntheticEvent<TextInputSelectionChangeEventData>) {
    const {start,end} = event.nativeEvent.selection
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 16
  },

  inputText: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray"
  }
});
