import actionTypes from './action-types';
import { Currency } from './types';
import NAMES from 'src/constants/names';
import createPollingAction from 'src/lib/redux/polling-action';

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
            pair,
            symbol,
            active: false,
            trades: []
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

function getTrades(pair: string) {
  return fetch(`https://api.kraken.com/0/public/Trades?pair=${pair}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json())
    .then(json => {
      return json.result[pair].map(trade => {
        return { price: Number(trade[0]), time: trade[2] };
      });
    });
}

export const fetchPrices = createPollingAction(dispatch => {
  return getPrices()
    .then(json => dispatch({ type: actionTypes.FETCH_SUCCESS, json }))
    .catch(() => dispatch({ type: actionTypes.FETCH_ERROR }));

}, 1000);

export const toggleCapsule = (symbol: string) => {
  return { type: actionTypes.TOGGLE_CAPSULE, symbol };
};

export const fetchTrades = (pair: string) => dispatch => {
  return getTrades(pair)
    .then(json => dispatch({ type: actionTypes.FETCH_TRADES_SUCCESS, pair, json }))
    .catch(() => dispatch({ type: actionTypes.FETCH_TRADES_ERROR, pair }));
};
