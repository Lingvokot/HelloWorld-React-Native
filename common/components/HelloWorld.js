/* @flow */
import React, {
  StyleSheet,
  Component,
  Text,
  Platform,
  View,
  TouchableHighlight,
  Dimensions,
  Image,
} from 'react-native';

import AwesomeIcon from './AwesomeIcon';

const styles = StyleSheet.create({
  HeloWorld: {
    fontSize: 20,
    textAlign: `center`,
    margin: 10,
  },
  Container: {
    flex : 1,
    justifyContent : `center`,
    alignItems : `center`,
    backgroundColor : `#F5FCFF`,
  },
  Wrapper: {
    flex: 1,
    alignItems : `stretch`,
    justifyContent : `center`,
  },
});

class HelloWorld extends Component {
  render () {

    var {height, width,} = Dimensions.get(`window`);

    return (
      <View style={styles.Wrapper}>
        <TouchableHighlight
          activeOpacity={0.7}
          onPress={this.props.onPress}
          underlayColor={`#F1D7E5`}
          >
          <View style={[styles.Container, {width, height}]}>
            <View>
              <Text style={styles.HelloWorld}>Hello, World!</Text>
            </View>
            <View>
              <Text>Your platform is: {Platform.OS}</Text>
              {Platform.OS === `android` && <Text>, running on version: {Platform.Version}</Text>}
              <AwesomeIcon />
            </View>
            <View>
              <Text style={{marginTop: 50}}>Tap on the screen to continue</Text>
            </View>
          </View>
      </TouchableHighlight>
    </View>
    );
  }
}

HelloWorld.propTypes = {
  onClick: React.PropTypes.func,
};

export default HelloWorld;
