import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Product } from '../../types/product';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, NgClass, RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() product!: Product;

  constructor(private cartService: CartService) {}

addToCart(): void {
  console.log('ADD TO CART:', this.product);
  this.cartService.addToCart(this.product);
}
}