import React from 'react';
import { Component } from 'react';
import { ScrollView } from 'react-native';

import PriceCapsule from 'src/Prices/List/Capsule';
import { Currency } from 'src/Prices/types';

interface Props {
  currencies: Currency[];
}

export default class List extends Component<Props> {
  render() {
    return (
      <ScrollView>{
        this.props.currencies.map(
          (currency: Currency) => {
            return (
              <PriceCapsule
                key={currency.name}
                name={currency.name}
                symbol={currency.symbol}
                price={currency.price}
              />
            );
          }
        )
      }</ScrollView>
    );
  }
}
