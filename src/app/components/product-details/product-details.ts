import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../../types/product';
import { productsData } from '../../types/product-data';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

  product!: Product;

  constructor(private route: ActivatedRoute) {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.product = productsData.find(
      product => product.id === id
    )!;

  }

}