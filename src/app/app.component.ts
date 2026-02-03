import { Component, computed, effect, inject, signal } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CryptoService } from './services/crypto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_cryptoFolio';
}
