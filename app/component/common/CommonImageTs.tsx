import React from "react";
import {
  Image,
  ImageRequireSource,
  ImageSourcePropType,
  ImageStyle,
  ImageURISource,
  View,
  ViewStyle
} from "react-native";
import { base64Url, showLog } from "../../util/ComUtils";


export interface IImageProps {
  style: ImageStyle,
  source: string,
  defaultSource?: ImageRequireSource,
}

/**
 * 用于展示网络图片，兼容普通 url 和 base64 格式
 */
export class CommonImageTs extends React.Component<IImageProps, any> {

  _onError = () => {
    showLog(`CommonImageTs onError`);
  };

  _onLayout = () => {
    showLog(`CommonImageTs onLayout`);
  };

  _onLoad = () => {
    showLog(`CommonImageTs onLoad`);
  };

  _onLoadEnd = () => {
    showLog(`CommonImageTs onLoadEnd`);
  };

  _onLoadStart = () => {
    showLog(`CommonImageTs onLoadStart`);
  };

  _onPartialLoad = () => {
    showLog(`CommonImageTs onPartialLoad `);
  };

  _onProgress = () => {
    showLog(`CommonImageTs onProgress `);
  };

  /**
   * 判断是否是 base64
   * @param str
   * @private
   */
  private isBase64(str:string) {
    if (str ==='' || str.trim() ===''){ return false; }
    try {
      return btoa(atob(str)) == str;
    } catch (err) {
      return false;
    }
  }

  render() {
    const { source, style, defaultSource } = this.props;
    let content: ImageURISource;
    //网络图片
    if (isBase64(source)) {
      content = { uri: base64Url(source) };
    } else {
      content = { uri: source };
    }
    return <View>
      <Image
        source={content} style={[style]}
        //当此属性为 true 时，表示此图片是一个启用了无障碍功能的元素
        accessible={true}
        //设置一段文字。当用户与图片交互时，读屏器（无障碍功能）会朗读你所设置的这段文字
        accessibilityLabel={"我是点击图片时朗读的文字"}
        //blurRadius(模糊半径)：为图片添加一个指定半径的模糊滤镜
        blurRadius={1}
        //在读取图片时默认显示的图片 在 Android 的 debug 版本上本属性不会生效（但在 release 版本中会生效）。
        // defaultSource={defaultSource}
        //渐入的动画持续时间。
        fadeDuration={300}
        //与源类似，此属性表示用于呈现图像的加载指示符的资源，显示到图像准备好显示为止，通常是在从网络下载图像之后 debug状态不显示图片
        loadingIndicatorSource={require("../../../images/ic_mima.png")}
        onError={() => this._onError()}
        onLayout={() => this._onLayout()}
        onLoad={() => this._onLoad()}
        onLoadStart={() => this._onLoadStart()}
        onLoadEnd={() => this._onLoadEnd()}
        onPartialLoad={() => this._onPartialLoad()}
        onProgress={() => this._onProgress()}
        /**
        * 当图片实际尺寸和容器样式尺寸不一致时，决定以怎样的策略来调整图片的尺寸。默认为auto
        * auto: 使用启发式算法来在resize和scale中自动决定
          resize:在图片解码之前，使用软件算法对其在内存中的数据进行修改。当图片尺寸比容器尺寸大得多时，应该优先使用此选项
          scale:对图片进行缩放。和resize相比，scale速度更快（一般有硬件加速），而且图片质量更优。在图片尺寸比容器尺寸小或者只是稍大一点时，应该优先使用此选项
        *
        */
        resizeMethod={"resize"}
        resizeMode={"cover"}


      />
    </View>;
  }
}
