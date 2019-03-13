export interface Trade {
  price: number;
  time: number;
}

export interface Currency {
  name: string;
  symbol: string;
  pair: string;
  price?: number;
  active: boolean;
  trades: Trade[];
}

export interface PricesState {
  currencies: Currency[];
  fetched: boolean;
}
