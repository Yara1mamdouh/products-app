import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../types/product';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {

  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    console.log('PRODUCT ID:', id);

    this.productService.getProductById(id).subscribe({
      next: (product) => {
        console.log('PRODUCT DETAILS:', product);
        this.product = product;
      },
      error: (error) => {
        console.error('API ERROR:', error);
      }
    });
  }
}