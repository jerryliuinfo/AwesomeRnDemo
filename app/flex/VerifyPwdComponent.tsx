import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";


export class VerifyPwdComponent extends React.Component<any, any> {

  key = (num: number) => {
    return (
      <ImageBackground source={require("../../images/dials/keyboard.png")}
                       style={styles.keyboard}
                       key={num}
      >
        <Image source={require("../../images/dials/num_1.png")}
               style={styles.number}
        />
      </ImageBackground>
    );
  };

  display = (index: number) => {
    return (
      <View style={styles.displayBg} key={index}>

      </View>
    );
  };


  render() {
    return (
      <View style={styles.container}>

        <ImageBackground source={require("../../images/dials/ic_pwd_bg.png")}
                         style={[styles.pwd_bg]}
        >
          <Text style={{ color: "#205102", fontSize: 22, marginTop: 16 }}>家长身份验证</Text>

          <View style={styles.displayContainer}>
            {
              [1, 1, 1, 1, 1, 1].map((item, index) => {
                return this.display(index);
              })
            }

            {/*<Image source={require('../../images/dials/ic_delete.png')} style={{width:39,height:26,marginEnd:20}}/>*/}
          </View>


          {/*整个键盘背景*/}
          <ImageBackground source={require("../../images/dials/ic_bg_pwd_number.png")}
                           style={styles.pwd_number_container}
          >

            <View style={styles.rowContainer}>

              <View style={styles.row}>
                {
                  [1, 2, 3].map((item, index) => {
                    return this.key(item);
                  })
                }
              </View>
              <View style={styles.row}>
                {
                  [4, 5, 6].map((item, index) => {
                    return this.key(item);
                  })
                }
              </View>
              <View style={styles.row}>
                {
                  [7, 8, 9].map((item, index) => {
                    return this.key(item);
                  })
                }
              </View>
              <View style={styles.row}>
                {
                  [7, 8, 9].map((item, index) => {
                    return this.key(item);
                  })
                }
              </View>

            </View>


          </ImageBackground>

        </ImageBackground>
        <Image source={require("../../images/dials/ic_close.png")}
               style={styles.delete}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },

  displayContainer: {
    flexDirection: "row",
    backgroundColor: "red",
    marginTop: 6
  },

  pwd_bg: {
    width: 405,
    height: 341,
    //水平方向居中
    alignItems: "center"
  },


  displayBg: {
    width: 24,
    height: 24,
    backgroundColor: "white",
    borderRadius: 45,
    marginHorizontal: 8
  },

  pwd_number_container: {
    width: 405,
    height: 231,
    //白色背景距离顶部的距离
    marginTop: 16
    // flexDirection: "row",
    // justifyContent: "center"
    // alignItems: "center",
  },

  rowContainer: {
    flexDirection: "column",
    flex: 1,
    // backgroundColor:'red',
    justifyContent: "center",
    alignItems: "center"

  },

  row: {
    flexDirection: "row",
    marginTop: 9
  },

  keyboard: {
    width: 66,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 18
  },
  number: {
    width: 21,
    height: 21
  },

  delete: {
    width: 42,
    height: 42,
    marginTop: 16
  }


});