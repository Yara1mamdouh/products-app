import { Component } from '@angular/core';
import { Product } from '../../types/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  imports: [ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  products: Product[] = [
    {
      id: 1,
      name: 'Wireless Earbuds',
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400',
      price: 799,
      rating: 4,
      stock: 5
    },
    {
      id: 2,
      name: 'AirPods Max',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400',
      price: 5500,
      rating: 5,
      stock: 0
    },
    {
      id: 3,
      name: 'Bose Headphones',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      price: 2890,
      rating: 4,
      stock: 3
    },
    {
      id: 4,
      name: 'VIVEFOX Headphones',
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400',
      price: 930,
      rating: 3,
      stock: 0
    }
  ];

}