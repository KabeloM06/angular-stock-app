import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StocksService {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
  
}

@Injectable()
export class StocksService {

  constructor(private http: HttpClient) {}

  get() {
    return stocks.slice();  //method to get stocks
  }

  add(stock) {
    stocks.push(stock);
    return this.get(); //method to add a new stock
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();  // remove a stock
  }

  load(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(service + '/stocks/snapshot?symbols='+ symbols.join());
    }  //call HttpClient service to load stock values from the API
  }
}
