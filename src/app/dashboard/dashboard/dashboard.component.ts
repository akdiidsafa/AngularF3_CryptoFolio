import { Component, computed, inject } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';
import { CryptoCardComponent } from '../../crypto-card/crypto-card/crypto-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,CryptoCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cryptoService = inject(CryptoService)
  coins = this.cryptoService.coins
  total = computed(()=>{
    
     let sum =0
     this.coins().forEach(coin => {
       sum += coin.price * coin.quantity
     });
   return sum
  }) 
   coinSignal(id: string) {
    return computed(() =>
      this.coins().find(c => c.id === id)!
    );
  }
  updateCoinQuantity(id: string, amount: number) {
    this.cryptoService.updateQuantity(id, amount);
  }

}
