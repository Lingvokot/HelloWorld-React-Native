import React, {
  StyleSheet,
  Component,
  Text,
  Platform,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  HeloWorld: {
    fontSize: 20,
    textAlign: `center`,
    margin: 10,
  },
});

class HelloWorld extends Component {
  render () {
    return (
      <View>
        <View>
          <Text style={styles.HelloWorld}>Hello, world!</Text>
        </View>
        <View>
          <Text>Your platform is: {Platform.OS},</Text>
          {Platform.OS === `android` && <Text>running on version: {Platform.Version}</Text>}
        </View>
      </View>
    );
  }
}

export default HelloWorld;
