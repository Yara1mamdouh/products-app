import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Register } from './components/register/register';
import { Login } from './components/login/login';
import { Cart } from './components/cart/cart';
import { NotFound } from './components/not-found/not-found';
import { ProductDetails } from './components/product-details/product-details';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },

  {
    path: 'products',
    component: Products
  },

  {
    path: 'register',
    component: Register
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'cart',
    component: Cart
  },

  {
    path: 'products/:id',
    component: ProductDetails
  },

  {
    path: '**',
    component: NotFound
  }
];