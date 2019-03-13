import actionTypes from './action-types';
import { Currency } from './types';
import NAMES from 'src/constants/names';

interface Currencies {
  [pair: string]: Currency;
}

function getCurrencies(): Promise<Currencies> {
  return fetch('https://api.kraken.com/0/public/AssetPairs', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json())
    .then(json => {
      return Object.keys(json.result).reduce((currencies: Currencies, pair: string) => {
        const pairData = json.result[pair];

        if (pairData.quote === 'ZUSD' && !pair.match('.d')) {
          let symbol = pairData.base;

          if (symbol[0] === 'X' && symbol !== 'XTZ') symbol = symbol.slice(1);

          currencies[pair] = {
            name: NAMES[symbol],
            symbol
          };
        }

        return currencies;
      }, {});
    });
}

function getPrices(): Promise<Currency[]> {
  return getCurrencies().then((currencies: Currencies) => {
    const pairParam = Object.keys(currencies).join();

    return fetch(`https://api.kraken.com/0/public/Ticker?pair=${pairParam}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
      .then(json => {
        return Object.keys(json.result).map((pair: string) => {
          const priceData = json.result[pair];

          return {
            ...currencies[pair],
            price: Number(priceData.c[0])
          };
        });
      });
  });
}

export const fetchPrices = () => dispatch => {
  return getPrices()
    .then(json => dispatch({ type: actionTypes.FETCH_SUCCESS, json }))
    .catch(() => dispatch({ type: actionTypes.FETCH_ERROR }));
};
