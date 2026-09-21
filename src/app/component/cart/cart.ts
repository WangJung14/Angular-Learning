import { Component, inject, output } from '@angular/core';
import { Product, ProductService } from '../../product.service';

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

  // remove product from cart
  removeFromCart(product: Product) {
    product.isAvailable = true;
  }

}

