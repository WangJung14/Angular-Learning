import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItemComponent } from './product-item-component/product-item-component';
import { it } from 'vitest';

interface Product{
  name : string,
  price : number,
  isAvailable : boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [ProductItemComponent],
})
export class App {
  protected readonly title = signal('Quang Trung');
  currentProduct: Product = {
    name: 'Iphone 18',
    price: 10000,
    isAvailable: true,
  };

  productList: Product[] = [
    {
      name: 'Iphone 18',
      price: 10000,
      isAvailable: true,
    },
    {
      name: 'SamSungS24',
      price: 9000,
      isAvailable: true,
    },
  ];

  /*
   * Buy product func : this func will change status of product = false
   * */
  buyProduct(product: Product) {
    product.isAvailable = false;
  }

  /*
   * Apply discount func : this func will change price of product
   * */
  applyDiscount() {
    this.currentProduct.price = 10000 - 2000;
  }

  protected readonly it = it;
}


