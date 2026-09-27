import { Component, computed, inject, signal } from '@angular/core';
import { Product, ProductService } from '../../product.service';
import { ProductItemComponent } from '../../product-item-component/product-item-component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-product-list',
  imports: [ProductItemComponent, RouterLink, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  //Dependency Injection Service
  //constructor(private productService: ProductService) {}
  // inject giúp DI mà không cần sử dụng constructor để truyền vào
  // inject giúp DI ở cấp độ khai báo biến
  private productService = inject(ProductService);

  searchBox = signal<String>('');

  // Declaration Product list
  productList = this.productService.productList;
  isLoading = this.productService.isLoading;
  newProductList : Product[] = this.productList();

  // Buy Product Func
  buyProduct(product: Product) {
    product.quantity--;

    // create new array list for signal
    this.productService.productList.update(oldList => [...oldList]);
  }

  // Filter Product list
  filterProductList = computed(() =>{
    let keyWord = this.searchBox().trim().toLowerCase();

    let currentList = this.productList();

    if (keyWord === ""){
      return currentList;
    }
    return currentList.filter(product =>
    product.name.toLowerCase().includes(keyWord));
  });
}
