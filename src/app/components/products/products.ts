import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Product } from '../../types/product';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('Products component started');

    this.productService.getProducts().subscribe({
      next: (response) => {
        console.log('API RESPONSE:', response);
        console.log('PRODUCT COUNT:', response.products.length);

        this.products = response.products;

        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('API ERROR:', error);
      }
    });
  }
}