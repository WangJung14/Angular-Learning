import { Routes } from '@angular/router';
import { ProductList } from './component/product-list/product-list';
import { Cart } from './component/cart/cart';
import { AddProduct } from './component/add-product/add-product';

export const routes: Routes = [
  {path : 'products', component : ProductList},
  {path : 'cart' , component : Cart},
  {path : 'add-product', component : AddProduct}
];
