import { Component } from '@angular/core';
import { Product } from '../../types/product';
import { productsData } from '../../types/product-data';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products: Product[] = productsData;

}