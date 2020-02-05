import React from 'react';
import {WebView} from 'react-native-webview';

export default class WebViewComponent extends React.Component {
  // 在网页加载完成之后，还可以主动调用此方法（以 ref 形式调用）继续给 WebView 注入 JS 代码。注入后会立即执行。
  _injectJavaScript = () => {
    // console.log('injectJavaScript');
  };

  // 设置 js 字符串，在网页加载之前注入的一段 JS 代码。
  _injectedJavaScript = () => {
    // console.log('injectedJavaScript');
  };

  // 当 WebView加载失败时调用的函数
  _onError = () => {
    console.log('onError');
  };

  // 当 WebView加载成功后执行的函数
  _onLoad = () => {
    console.log('onLoad');
  };

  // 函数，当加载结束调用，不管是成功还是失败。
  _onLoadEnd = () => {
    console.log('onLoadEnd');
  };

  // 当 WebView刚开始加载时调用的函数
  _onLoadStart = () => {
    console.log('onLoadStart');
  };

  // 当导航状态发生变化的时候调用。
  _onNavigationStateChange = () => {
    console.log('onNavigationStateChange');
  };

  render() {
    return (
      <WebView
        source={{uri: 'https://www.baidu.com'}}
        // injectJavaScript={this._injectJavaScript}
        // injectedJavaScript={this._injectedJavaScript}
        onError={this._onError}
        onLoad={this._onLoad}
        onLoadEnd={this._onLoadEnd}
        onLoadStart={this._onLoadStart}
        onNavigationStateChange={this._onNavigationStateChange}
      />
    );
  }
}
