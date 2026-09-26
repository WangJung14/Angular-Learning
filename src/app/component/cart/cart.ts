import { Component, inject, output } from '@angular/core';
import { Product, ProductService } from '../../product.service';
import {computed} from '@angular/core'
@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  // Dependency Injection Product Service
  //constructor(private productService: ProductService) {}
  private productService = inject(ProductService);

  productCartList = this.productService.productList;

  totalPrice = computed(() => {
    let total = 0;
    const currentList = this.productCartList;

    for(let i = 0 ; i < currentList().length ; i++){
      if (!currentList()[i].isAvailable){
        total += currentList()[i].price;
      }
    }
    return total;
  })
  // remove product from cart
  removeFromCart(product: Product) {
    product.isAvailable = true;

    // create new array for signal
    this.productService.productList.update(oldList => [...oldList]);
  }
}

