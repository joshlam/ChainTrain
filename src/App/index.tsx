import React from 'react';
import { Component } from 'react';
import styled from 'styled-components/native';

import Prices from 'src/Prices';

const Background = styled.View`
  backgroundColor: #e8e8e8
`;

export default class App extends Component {
  render() {
    return <Background><Prices /></Background>;
  }
}
