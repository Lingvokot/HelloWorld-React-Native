/* @flow */
import React, {
  StyleSheet,
  Component,
  View,
  TouchableWithoutFeedback,
  Dimensions,
  LayoutAnimation,
  Platform,
} from 'react-native';

import Button from 'react-native-button';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: `center`,
    justifyContent: `center`,
  },
  Square: {
    backgroundColor: Platform.OS === `android` ? `#7366c4`:`#C46680`,
  },
  ButtonWrapper: {
    position: `absolute`,
    bottom: 0,
    flex: 1,
    justifyContent: `center`,
    padding: 35,
  },
});

class RedSquare extends Component {

  constructor () {
    super();

    this.squareAspect = 0.2;

    const {height, width,} = Dimensions.get(`window`);
    const windowDimensions = {height, width,};
    const aspectScale = 1;
    const squareDimensions = this.computeSquareDimensions({dimensions: windowDimensions, aspectScale,});

    this.state = {
      aspectScale,
      clickCount: 0,
      augment: 1,
      windowDimensions,
      initialSquareDimensions: squareDimensions,
      squareDimensions,
    };
  }

  computeSquareDimensions ({dimensions, aspectScale,}) {
    const {width, height, } = dimensions;
    const dimension = Math.min(width, height);
    const squareAspect = this.squareAspect * aspectScale;
    const squareDimensions = {width: dimension * squareAspect, height: dimension * squareAspect,};
    return squareDimensions;
  }

  clickHandler () {

    let {augment, squareDimensions, windowDimensions, initialSquareDimensions,} = this.state;

    const isWidthOverflow = squareDimensions.width >= windowDimensions.width;
    const isHeightOverflow = squareDimensions.height >= windowDimensions.height;
    const isOverflow = isHeightOverflow || isWidthOverflow;

    const isShortage = squareDimensions.width < initialSquareDimensions.width;

    const shouldInvertAugment = isOverflow || isShortage;

    if (shouldInvertAugment) {
      augment *= -1;
    }

    const newAspectScale = Math.max(this.state.aspectScale + augment, 0.5);
    const newSquareDimensions = this.computeSquareDimensions({dimensions: windowDimensions, aspectScale: newAspectScale,});

    this.setState({
      clickCount: this.state.clickCount + 1,
      aspectScale: newAspectScale,
      augment,
      squareDimensions: newSquareDimensions,
    });

    LayoutAnimation.configureNext({
      duration: 450,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.spring,
        springDamping: 0.5,
      },
    });
  }

  render () {

    const {width, } = this.state.windowDimensions;

    return (
      <TouchableWithoutFeedback onPress={ () => this.clickHandler() }>
        <View style={[styles.Container, this.state.windowDimensions]}>

          <View style={[styles.Square, this.state.squareDimensions]} />

          <View style={[styles.ButtonWrapper, {width}]}>
            <Button onPress={this.props.onButtonPress}>Go back</Button>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default RedSquare;
