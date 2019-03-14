import React from 'react';
import { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';

import PriceCapsule from 'src/Prices/List/Capsule';
import { Currency } from 'src/Prices/types';

interface Props {
  currencies: Currency[];
}

function keyExtractor(item: Currency): string {
  return item.symbol;
}

export default class List extends Component<Props> {
  render() {
    return (
      <ScrollView>{
        <FlatList
          data={this.props.currencies}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => (
            <PriceCapsule
              name={item.name}
              symbol={item.symbol}
              price={item.price}
              active={item.active}
              pair={item.pair}
              trades={item.trades}
            />
          )}
        />
      }</ScrollView>
    );
  }
}
