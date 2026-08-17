import { Component, Input } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { Product } from '../../types/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, NgClass,RouterLink],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() product!: Product;

}