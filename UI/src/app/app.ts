import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { ProductList } from './components/product-list/product-list';
import { Cart } from './components/cart/cart';

@Component({
  selector: 'app-root',
  imports: [Navbar, ProductList, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('UI');
}
