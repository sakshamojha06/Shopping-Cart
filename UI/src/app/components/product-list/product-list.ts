import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

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

}