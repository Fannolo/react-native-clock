import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import moment from 'moment';
import tz from 'moment-timezone';

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: this._currentTime(),
    };
  }

  componentDidMount() {
    console.log('pippo', moment.tz.countries());
    console.log('pippo', moment.tz.countries());
  }

  render() {
    return (
      <View style={[this.props.style]}>
        <Text
          style={{
            fontSize: this.props.dimension ? this.props.dimension : 20,
            fontFamily: this.props.digitalClock
              ? 'DIGITALDREAMFAT'
              : this.props.fontFamily
              ? this.props.fontFamily
              : null,
            color: this.props.color,
          }}>
          {this.state.curTime}
        </Text>
      </View>
    );
  }

  _currentTime = () => {
    setInterval(() => {
      this.setState({
        curTime: moment()
          .tz(this.props.country)
          //.tz(this._returnCountry())
          .format(
            this._dateFormat(this.props.fullDate),
            this._timeFormat(this.props.twentyFour),
          ),
      });
    });
  };

  _timeFormat = (twentyFour) => {
    return twentyFour ? 'HH:mm:ss' : 'hh:mm:ss A';
  };

  _dateFormat = (fullDate) => {
    return fullDate ? 'MMMM Do YYYY' : '';
  };

  _returnCountry = (country) => {
    return 'America/New_York';
  };
}

Clock.defaultProps = {
  clockDimension: 200,
  digitalClock: false,
  color: '#000',
  fullDate: false,
  twentyFour: false,
  country: 'America/New_York',
  dimension: null,
};
