/* @flow */
import React, {
  Component,
  Navigator,
} from 'react-native';

import RedSquare from './RedSquare.js';
import HelloWorld from './HelloWorld.js';

class App extends Component {
  render () {
    return (
      <Navigator
        configureScene={ (route, routeStack) => Navigator.SceneConfigs.FadeAndroid }
        initialRoute={{name: `HelloWorld`}}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case `RedSquare`:
              return <RedSquare onButtonPress={ () => navigator.push({name: `HelloWorld`}) } />;
            case `HelloWorld`:
              return <HelloWorld onPress={ () => navigator.push({name: `RedSquare`}) } />;
          }
        }}
      />
    );
  }
}

export default App;
