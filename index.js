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

AppRegistry.registerComponent(`HelloWorldReactNative`, () => HelloWorldReactNative);
