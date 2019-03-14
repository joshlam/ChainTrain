import React from 'react';
import { Component } from 'react';
import styled from 'styled-components/native';

import Prices from 'src/Prices';

const Background = styled.View`
  backgroundColor: #e8e8e8
  flex: 1
`;

const TopBuffer = styled.View`
  marginTop: 25px
`;

export default class App extends Component {
  render() {
    return <Background><TopBuffer /><Prices /></Background>;
  }
}
