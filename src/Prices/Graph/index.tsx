import React from 'react';
import { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import * as actions from 'src/Prices/actions';
import { Trade } from 'src/Prices/types';

interface Props {
  pair: string;
  trades: Trade[];
  fetchTrades: (pair: string) => void;
}

const TradesView = styled.View`
`;

const TradeView = styled.View`
`;

export class Graph extends Component<Props> {
  componentDidMount() {
    this.props.fetchTrades(this.props.pair);
  }

  render() {
    return (
      <TradesView>{
        this.props.trades.map(trade => (
          <TradeView key={trade.time}>
            <Text>{trade.price}</Text>
            <Text>{trade.time}</Text>
          </TradeView>
        ))
      }</TradesView>
    );
  }
}

export default connect(() => ({}), {
  fetchTrades: actions.fetchTrades
})(Graph);
