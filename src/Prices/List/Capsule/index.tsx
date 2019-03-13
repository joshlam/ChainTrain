import React from 'react';
import { Component } from 'react';
import { Image, Text, View } from 'react-native';

import ICONS from 'src/styles/icons';

interface Props {
  name: string;
  symbol: string;
  price: number;
}

export default class Capsule extends Component<Props> {
  render() {
    const { name, symbol, price } = this.props;

    return (
      <View><Image source={ICONS[symbol]} /><Text>{
        name
      }</Text><Text>{
        symbol
      }</Text><Text>${
        price
      }</Text></View>
    );
  }
}
