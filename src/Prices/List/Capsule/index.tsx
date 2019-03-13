import React from 'react';
import { Component } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

import ICONS from 'src/styles/icons';
import * as actions from 'src/Prices/actions';
import Graph from 'src/Prices/Graph';
import { Trade } from 'src/Prices/types';

interface Props {
  active: boolean;
  name: string;
  symbol: string;
  pair: string;
  price: number;
  trades: Trade[];
  onPress: (symbol: string) => void;
}

const CapsuleView = styled.View`
`;

const Header = styled.View`
`;

export class Capsule extends Component<Props> {
  handlePress = () => {
    this.props.onPress(this.props.symbol);
  };

  render() {
    const { name, symbol, price, active, pair, trades } = this.props;

    return (
      <CapsuleView>
        <Header>
          <TouchableOpacity onPress={this.handlePress}>
            <Image source={ICONS[symbol]} />
            <Text>{name}</Text>
            <Text>{symbol}</Text>
            <Text>${price}</Text>
          </TouchableOpacity>
        </Header>
        {active ? <Graph pair={pair} trades={trades} /> : null}
      </CapsuleView>
    );
  }
}

export default connect(() => ({}), {
  onPress: actions.toggleCapsule
})(Capsule);
