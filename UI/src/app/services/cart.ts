import { computed, Injectable, signal } from "@angular/core";
import { Product } from "../models/product";

@Injectable({
    providedIn: "root"
})
export class CartService {
    private _cartItems = signal<Product[]>([]);

    searchText = signal('');

    cartItems = this._cartItems.asReadonly();

    cartCount = computed(() => this._cartItems().length);

    totalPrice = computed(() => this._cartItems().reduce((total, item) => total + item.price, 0));

    addToCart(product: Product): void {
        this._cartItems.update(items => {
            if (items.some(item => item.id === product.id)) {
            return items;
            }

            return [...items, product];
        });
    }

    removeFromCart(productId: number): void {
        this._cartItems.update(items => items.filter(product => product.id !== productId));
    }

    isInCart(productId: number): boolean {
        return this._cartItems().some(product => product.id === productId);
    }

    clearCart(): void {
        this._cartItems.set([]);  
    }
}