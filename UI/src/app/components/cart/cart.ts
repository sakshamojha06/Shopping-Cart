import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  cartService = inject(CartService);

  removeProduct(productId: number): void {

    const confirmed = confirm(
      'Are you sure you want to remove this product from cart?'
    );

    if (confirmed) {

      this.cartService.removeFromCart(productId);

      alert('Product removed from cart successfully!');

    }
    }

  clearCart(): void {

    const confirmed = confirm(
      'Are you sure you want to clear your entire cart?'
    );

    if (confirmed) {

      this.cartService.clearCart();

      alert('Cart cleared successfully!');

    }
  }
}
