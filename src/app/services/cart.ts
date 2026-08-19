import { Injectable } from '@angular/core';
import { Product } from '../types/product';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart(product: Product): void {
    const currentItems = this.cartItemsSubject.value;

    const existingItem = currentItems.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      currentItems.push({
        product: product,
        quantity: 1
      });
    }

    this.cartItemsSubject.next([...currentItems]);
  }

  increaseQuantity(productId: number): void {
    const items = this.cartItemsSubject.value;

    const item = items.find(
      item => item.product.id === productId
    );

    if (item) {
      item.quantity++;
      this.cartItemsSubject.next([...items]);
    }
  }

  decreaseQuantity(productId: number): void {
    const items = this.cartItemsSubject.value;

    const item = items.find(
      item => item.product.id === productId
    );

    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(productId);
        return;
      }

      this.cartItemsSubject.next([...items]);
    }
  }

  removeFromCart(productId: number): void {
    const items = this.cartItemsSubject.value.filter(
      item => item.product.id !== productId
    );

    this.cartItemsSubject.next(items);
  }

  getTotalItems(): number {
    return this.cartItemsSubject.value.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

  getTotalPrice(): number {
    return this.cartItemsSubject.value.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}