import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  cartService = inject(CartService);

  searchText = '';

  products = [
    {
      id: 1,
      name: 'Laptop',
      price: 50000,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400'
    },
    {
      id: 2,
      name: 'Mobile',
      price: 20000,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'
    },
    {
      id: 3,
      name: 'Headphones',
      price: 2000,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
    },
    {
      id: 4,
      name: 'Keyboard',
      price: 1000,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400'
    }
  ];


  addProduct(product: Product): void {

    const added = this.cartService.addToCart(product);

    if (!added) {
      alert(`${product.name} is already in your cart!`);
      return;
    }

    alert(`${product.name} added to cart successfully!`);
  }

  isAdded(productId: number): boolean {
    return this.cartService.isInCart(productId);
  }

  get filteredProducts(): Product[] {
    return this.products.filter(product => product.name.toLowerCase().includes(this.cartService.searchText().toLowerCase()));
  }
}