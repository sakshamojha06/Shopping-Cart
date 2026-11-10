import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { ConfirmationService } from '../../services/confirmation';
import { NotificationService } from '../../services/notification';

@Component({
  imports: [],
  selector: 'app-cart',
  styleUrl: './cart.css',
  templateUrl: './cart.html',
})
export class Cart {
  cartService = inject(CartService);
  confirmationService = inject(ConfirmationService);
  notificationService = inject(NotificationService);

  async removeProduct(productId: number): Promise<void> {
    const confirmed = await this.confirmationService.confirm(
      'Are you sure you want to remove this product from cart?'
    );

    if (confirmed) {
      this.cartService.removeFromCart(productId);
      this.notificationService.show('Product removed from cart successfully!', 'success');
    }
  }

  async clearCart(): Promise<void> {
    const confirmed = await this.confirmationService.confirm(
      'Are you sure you want to clear your entire cart?'
    );

    if (confirmed) {
      this.cartService.clearCart();
      this.notificationService.show('Cart cleared successfully!', 'success');
    }
  }
}
