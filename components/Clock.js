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

    this.country = this._returnCountry(this.props.country, this.props.city);
  }

  componentDidMount = () => {
    this._currentTime();
  };

  render() {
    return this.props.analog ? (
      <View
        style={{
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          borderWidth: 10,
          position: 'relative',
          width: this.props.clockDimension,
          height: this.props.clockDimension,
          borderColor: this.props.color,
          borderRadius: this.props.clockDimension,
        }}>
        <View borderWidth={5} height={15} position={'absolute'} top={0}></View>
        <View
          borderWidth={5}
          height={15}
          position={'absolute'}
          bottom={0}></View>
        <View borderWidth={2} width={5}></View>
      </View>
    ) : (
      <View>
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
          .tz('Asia/Shanghai')
          .format(this._timeFormat(this.props.twentyFour)),
      });
    });
  };

  _timeFormat = (twentyFour) => {
    return twentyFour ? 'HH:mm:ss' : 'hh:mm:ss A';
  };

  _returnCountry = (country, city) => {
    // moment.tz.zonesForCountry(country).map((item) => {
    //   if (item.toLowerCase().includes(city.replace(' ', '_').toLowerCase())) {
    //     console.log(item);
    //     return item.toString();
    //   }
    // });
  };
}

Clock.defaultProps = {
  clockDimension: 200,
  digitalClock: false,
  color: '#000',
  twentyFour: false,
  country: 'US',
  city: 'New York',
  dimension: null,
  analog: true,
};
