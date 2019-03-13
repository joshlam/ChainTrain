export interface Currency {
  name: string;
  symbol: string;
  price?: number;
}

export interface PricesState {
  currencies: Currency[];
  fetched: boolean;
}
