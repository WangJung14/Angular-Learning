import { Component, inject } from '@angular/core';
import { Product, ProductService } from '../../product.service';
import { ProductItemComponent } from '../../product-item-component/product-item-component';
import { it } from 'vitest';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  //Dependency Injection Service
  //constructor(private productService: ProductService) {}
  // inject giúp DI mà không cần sử dụng constructor để truyền vào
  // inject giúp DI ở cấp độ khai báo biến
  private productService = inject(ProductService);

  // Declaration Product list
  productList = this.productService.productList;

  // Buy Product Func
  buyProduct(product: Product) {
    product.isAvailable = false;
  }
  protected readonly it = it;
}
