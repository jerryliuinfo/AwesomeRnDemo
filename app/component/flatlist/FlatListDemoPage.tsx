import React from "react";
import { Button, FlatList, ListRenderItem, StatusBar, StyleSheet, Text, View } from "react-native";
import { ItemInfo } from "../../model/ItemInfo";
import { Item } from "../common/Item";
import { Separator } from "../common/Seperator";
import { EmptyContainer } from "../common/EmptyContainer";
import { FooterContainer } from "../common/FooterContainer";
import { HeaderContainer } from "../common/HeaderContainer";
import { isEmptyStr, showLog } from "../../util/ComUtils";


const INIT_DATAS: Array<ItemInfo> = [
  { id: "1", title: "First Item" },
  { id: "2", title: "Second Item" },
  { id: "3", title: "Third Item" },
 
];

enum LoadingStatus {
  NORMAL,
  LOADING,
  NOMORE

}

export interface IFlatListState {
  refreshing: boolean,
  selectedId: string,
  headerTitle?: string,
  data: Array<ItemInfo>,
  canLoadMore: boolean,
  status: LoadingStatus,
}


export default class FlatListDemoPage extends React.Component<any, IFlatListState> {

  constructor(props: any) {
    super(props);
    this.state = {
      refreshing: false,
      selectedId: "",
      headerTitle: "我是头部标题",
      data: [],
      canLoadMore: false,
      status: LoadingStatus.NOMORE
    };
  }

  getHintMsg = (): string => {
    const status = this.state.status;
    let hintMsg = "";
    if (status === LoadingStatus.NOMORE) {
      hintMsg = "没有更多数据了";
    } else if (status === LoadingStatus.LOADING) {
      hintMsg = "正在加载中,请稍后...";
    }
    return hintMsg;
  };

  renderItem = (item: ItemInfo) => {
    const selectedId = this.state.selectedId;
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    return <Item
      item={item}
      onPress={(id) => this.setState({
        selectedId: id
      })}
      style={{ backgroundColor }}

    />;
  };

  componentDidMount() {
    this._loadData();
  }


  _loadData = () => {
    this.setState({
      status: LoadingStatus.LOADING
    });

    setTimeout(() => {
      const thisData = JSON.parse(JSON.stringify(INIT_DATAS));
      const newData = [...this.state.data, ...thisData];
      showLog(`newData:${JSON.stringify(newData)}`);
      for (let [index, item] of newData.entries()) {
        item.id = index.toString();
      }
      const canLoadMore = newData.length <= 20;
      if (!canLoadMore) {
        this.setState({
          canLoadMore: canLoadMore,
          status: LoadingStatus.NOMORE
        });
      } else {
        this.setState({
          data: newData,
          canLoadMore: canLoadMore,
          status: LoadingStatus.NORMAL
        });
      }

    }, 1500);
  };

  _onEndReached = () => {
    showLog(`FlatListDemoPage onEndReached`);
    this._loadData();
  };
  _onRefresh = () => {
    showLog(`onRefresh --->`);
    this.setState({
      data: [],
      refreshing: true,
      canLoadMore: false
    });
    const newData = JSON.parse(JSON.stringify(INIT_DATAS));
    for (let [index, item] of newData.entries()) {
      item.id = index.toString();
    }
    setTimeout(() => {
      this.setState({
        data: newData,
        refreshing: false,
        canLoadMore: true
      });
    }, 1500);
  };


  _renderFooter = () => {
    const hintMsg = this.getHintMsg();
    showLog(`_renderFooter _renderFooter:${hintMsg}`)
    return !isEmptyStr(hintMsg) && <FooterContainer msg={hintMsg} />;
  };


  _clean = () => {
    this.setState({
      data: [],
      headerTitle: "Update"
    });
  };
  ITEM_HEIGHT = 200;

  render() {
    const { canLoadMore } = this.state;
    return (
      <View style={[styles.container]}>
        <FlatList<ItemInfo>
          data={this.state.data}
          renderItem={({ item, index, separators }) => this.renderItem(item)}

          //此函数用于为给定的 item 生成一个不重复的 key。
          // Key 的作用是使 React 能够区分同类元素的不同个体，以便在刷新时能够确定其变化的位置，减少重新渲染的开销。若不指定此函数，
          // 则默认抽取item.key作为 key 值。若item.key也不存在，则使用数组下标
          keyExtractor={(item, index) => item.id.toString()}
          //行与行之间的分隔线组件
          ItemSeparatorComponent={() => <Separator />}
          ListEmptyComponent={() => <EmptyContainer />}
          ListFooterComponent={this._renderFooter()}
          ListHeaderComponent={() => <HeaderContainer title={this.state.headerTitle} />}
          numColumns={1}
          //列表布局为水平或垂直模式，默认为 false
          horizontal={false}
          //getItemLayout是一个可选的优化，用于避免动态测量内容尺寸的开销，不过前提是你可以提前知道内容的高度。
          // 如果你的行高是固定的，getItemLayout用起来就既高效又简单，类似下面这样：
          getItemLayout={(data, index) => (
            { length: this.ITEM_HEIGHT, offset: this.ITEM_HEIGHT * index, index }
          )}
          /**
          * 指定一开始渲染的元素数量，最好刚刚够填满一个屏幕，这样保证了用最短的时间给用户呈现可见的内容。
          * 注意这第一批次渲染的元素不会在滑动过程中被卸载，这样是为了保证用户执行返回顶部的操作时，不需要重新渲染首批元素。
          */
          initialNumToRender={3}
          //翻转滚动方向
          inverted={false}
          //决定当距离内容最底部还有多远时触发onEndReached回调。注意此参数是一个比值而非像素单位。比如，0.5 表示距离内容最底部的距离为当前列表可见长度的一半时触发
          onEndReachedThreshold={0.1}
          //当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
          onEndReached={() => {
            this._onEndReached();
          }}
          //是否正在刷新
          refreshing={this.state.refreshing}
          onRefresh={() => {
            this._onRefresh();
          }}
          //设置下拉加载更多的指示器的位置
          progressViewOffset={10}

          extraData={this.state}

        />
        <Button title={"清空内容"}
                onPress={() => this._clean()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  columnStyle: {
    backgroundColor: "red"
  }

});
