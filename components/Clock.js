import React, {Component} from 'react';
import {Text, View} from 'react-native';

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date().toLocaleString(),
    };
  }

  componentDidMount = () => {
    this._currentTime();
  };

  componentDidUpdate() {
    console.log(`current time is: ${this.state.curTime}`);
  }

  render() {
    return (
      <View width={this.props.clockDimension}>
        <Text fontSize={this.props.clockDimension}> {this.state.curTime} </Text>
      </View>
    );
  }

  _currentTime = () => {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString(),
      });
    }, 1000);
  };
}
Clock.defaultProps = {
  clockDimension: 40,
};
