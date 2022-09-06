import React from "react";
import { RefreshControl, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export interface IRefreshControlState {
  refreshing: boolean,
}

export class RefreshControlDemoPage extends React.Component<any, IRefreshControlState> {

  constructor(props:any) {
    super(props);
    this.state = {
      refreshing:false
    }
  }

  doOnRefresh = () => {
    this.setState({
      refreshing: true
    });

    setTimeout(() => {
      this.setState({
        refreshing: false
      });
    }, 2000);
  };

  render() {
    const { refreshing } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.doOnRefresh}
              //指定至少一种颜色用来绘制刷新指示器
              colors={['#FF18C35E','#e1e1e1','#ff0000']}
              //是否要启用刷新指示器, 默认 true
              enabled={true}
              //指定刷新指示器的背景色
              progressBackgroundColor={'green'}
              progressViewOffset={10}
              //指定刷新指示器的颜色
              tintColor={'#0000ff'}
              title={'加载中....'}
              titleColor={'#ff0000'}
            />
          }

        >
          <Text>Pull down to see RefreshControl indicator</Text>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  scrollView: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  }
});
