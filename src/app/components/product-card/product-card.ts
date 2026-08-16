import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Product } from '../../types/product';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() product!: Product;

}