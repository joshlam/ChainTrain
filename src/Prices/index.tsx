import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import Loader from 'src/components/Loader';
import * as actions from 'src/Prices/actions';
import PricesList from 'src/Prices/List';
import { Currency } from 'src/Prices/types';

interface Props {
  currencies: Currency[];
  fetched: boolean;
  fetchPrices: () => void;
}

export class Prices extends Component<Props> {
  componentDidMount = () => {
    this.props.fetchPrices();
  };

  render() {
    return (
      this.props.fetched
        ? <PricesList currencies={this.props.currencies}/>
        : <Loader />
    );
  }
}

export const mapStateToProps = ({ prices }) => ({
  currencies: prices.currencies,
  fetched: prices.fetched
});

export default connect(mapStateToProps, {
  fetchPrices: actions.fetchPrices
})(Prices);
