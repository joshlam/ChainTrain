import React from 'react';
import { Component } from 'react';
import { StyleSheet } from 'react-native';
import { LineChart } from 'react-native-svg-charts'
import { connect } from 'react-redux';

import * as actions from 'src/Prices/actions';
import { Trade } from 'src/Prices/types';

interface Props {
  pair: string;
  trades: Trade[];
  fetchTrades: (pair: string) => void;
}

const styles = StyleSheet.create({
  graph: {
    height: 200
  }
});

export class Graph extends Component<Props> {
  componentDidMount() {
    this.props.fetchTrades(this.props.pair);
  }

  render() {
    return (
      <LineChart
        style={styles.graph}
        data={this.props.trades.map(trade => trade.price)}
        svg={{ stroke: 'rgb(82, 73, 208)' }}
        contentInset={{ top: 20, bottom: 20 }}
      ></LineChart>
    );
  }
}

export default connect(() => ({}), {
  fetchTrades: actions.fetchTrades
})(Graph);
