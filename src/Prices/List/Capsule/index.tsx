import React from 'react';
import { Component } from 'react';
import { TouchableOpacity } from 'react-native';
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
  backgroundColor: white
  border-radius: 6px
  margin: 10px
`;

const Header = styled.View`
  borderBottomColor: rgb(229, 229, 229)
  borderBottomWidth: 2px
  flexDirection: row
  justifyContent: space-between
  padding: 10px
`;

const Currency = styled.View`
  flexDirection: row
`

const Icon = styled.Image`
  margin: 5px
  marginRight: 10px
`

const Metadata = styled.View`
  margin: 5px
  justifyContent: center
`;

const Name = styled.Text`
  fontWeight: 600
`;

const Symbol = styled.Text`
  color: grey
`;

const Price = styled.Text`
  fontWeight: 600
  padding: 15px
  textAlign: right
`;

export class Capsule extends Component<Props> {
  handlePress = () => {
    this.props.onPress(this.props.symbol);
  };

  render() {
    const { name, symbol, price, active, pair, trades } = this.props;

    return (
      <CapsuleView>
        <TouchableOpacity onPress={this.handlePress}>
          <Header>
            <Currency>
              <Icon source={ICONS[symbol]} />
              <Metadata>
                <Name>{name}</Name>
                <Symbol>{symbol}</Symbol>
              </Metadata>
            </Currency>
            <Price>${price}</Price>
          </Header>
        </TouchableOpacity>
        {active ? <Graph pair={pair} trades={trades} /> : null}
      </CapsuleView>
    );
  }
}

export default connect(() => ({}), {
  onPress: actions.toggleCapsule
})(Capsule);
