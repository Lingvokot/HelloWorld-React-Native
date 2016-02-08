import React, {
  Component,
  Image,
} from 'react-native';

export default class AwesomeIcon extends Component {
  render () {
    return <Image source={require('../../assets/android.jpg')} style={{width: 100, height: 100, }} />;
  }
}
