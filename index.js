/* @flow */
import React, {
  AppRegistry,
  Component,
} from 'react-native';

import App from './common/components/App.js';

class HelloWorldReactNative extends Component {
  render() {
    return (
      <App />
    );
  }
}

if (__DEV__) {
  window.React = global.React = React;
}

AppRegistry.registerComponent(`HelloWorldReactNative`, () => HelloWorldReactNative);
