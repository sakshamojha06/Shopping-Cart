import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  cartService = inject(CartService);

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.cartService.searchText.set(value);
  }
}
