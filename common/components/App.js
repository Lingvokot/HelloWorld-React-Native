import React, {
  StyleSheet,
  Component,
  View,
} from 'react-native';

import HelloWorld from './HelloWorld.js';

const styles =  StyleSheet.create({
  App: {
    flex : 1,
    justifyContent : `center`,
    alignItems : `center`,
    backgroundColor : `#F5FCFF`,
  },
});

class App extends Component {
  render () {
    return (
      <View style={styles.App}>
        <HelloWorld />
      </View>
    );
  }
}

export default App;
