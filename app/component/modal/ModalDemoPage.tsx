import React from "react";
import { Modal, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { showLog } from "../../util/ComUtils";

export interface IModalState{
  modalVisible:boolean
}
export class ModalDemoPage extends React.Component<any, IModalState>{

  constructor(props: any) {
    super(props);
    this.state = {
      modalVisible:false,
    }
  }

  hideModal = () =>{
    showLog(`onRequestClose`)
    this.setState({
      modalVisible:false
    });
  }

  private _onShow() {
    showLog(`onShow....`)
  }

  private _onDismiss() {

  }

  render() {
    const {modalVisible} = this.state
    return (
      <View style={styles.container}>
        <Modal
          //animationType指定了 modal 的动画类型。
          // slide: 从底部滑入滑出。 fade: 淡入淡出。none 没有动画，直接蹦出来
          animationType={'slide'}
          // transparent={true}
          visible={modalVisible}
          //onRequestClose回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。
          // 请务必注意本属性在 Android 平台上为必需，且会在 modal 处于开启状态时阻止BackHandler事件。
          onRequestClose={() => {
            this.hideModal()
          }}

          onShow={() => {this._onShow()}}
          onDismiss={() => this._onDismiss()}
          //StatusBar半透明道具确定您的模态是否应该放在系统状态栏下面。
          statusBarTranslucent={true}
          /**resentationStyle决定 modal（在较大屏幕的设备比如 iPad 或是 Plus 机型）如何展现
          * fullScreen: 完全盖满屏幕。
          * pageSheet: 直方向几乎盖满，水平居中，左右留出一定空白（仅用于大屏设备）。
          * formSheet: 竖直和水平都居中，四周都留出一定空白（仅用于大屏设备）。
          * overFullScreen: 完全盖满屏幕，同时允许透明。
          */
          presentationStyle={'formSheet'}

        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.hideModal()
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>

        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setState({
              modalVisible:true
            })
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    // backgroundColor:'red',
  },
  centeredView: {
    flex: 1,
    flexDirection:'column',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    // backgroundColor:'red',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
