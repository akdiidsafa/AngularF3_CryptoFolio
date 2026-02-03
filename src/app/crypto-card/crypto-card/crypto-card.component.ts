import { Component, Input, Signal } from '@angular/core';
import { Coin } from '../../services/crypto.service';
@Component({
  selector: 'app-crypto-card',
  standalone: true,
  imports: [],
  templateUrl: './crypto-card.component.html',
  styleUrl: './crypto-card.component.css'
})
export class CryptoCardComponent {
  @Input ({required:true}) coin!:Signal<Coin>
  @Input ({required:true}) updateQuantity!:(amount:number) => void
  acheter () {
    this.updateQuantity(+1);
  }
  vender(){
    this.updateQuantity(-1);
  }
}
