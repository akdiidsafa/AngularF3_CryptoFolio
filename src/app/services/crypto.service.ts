import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export interface Coin {
  id: string;
  name: string;
  price: number;
  quantity: number;
  change24h: number;
  lastUpdate: Date;
}

export class CryptoService {

 
  coins = signal<Coin[]>([
{ id: 'btc', name: 'Bitcoin', price: 65000, quantity: 1.2,change24h: 0, lastUpdate: new Date()},
{id: 'eth',name: 'Ethereum',price: 3500,quantity: 5, change24h: 0, lastUpdate: new Date()},
{ id: 'ada', name: 'Cardano', price: 1.25, quantity: 1000, change24h: 0, lastUpdate: new Date() }
  ]);


  updateQuantity(id: string, amount: number) {
    this.coins.update(coins =>
      coins.map(coin =>
        coin.id === id
          ? { ...coin, quantity: coin.quantity + amount }
          : coin
      )
    );
  }


  simulateMarket() {
    this.coins.update(coins =>
      coins.map(coin => {
        const variation = (Math.random() * 10 - 5); 
        const newPrice = coin.price * (1 + variation / 100);

        return {
          ...coin,
          price: Number(newPrice.toFixed(2)),
          change24h: Number(variation.toFixed(2)),
          lastUpdate: new Date()
        };
      })
    );
  }
}
