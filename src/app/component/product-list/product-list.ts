import { Component, inject } from '@angular/core';
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

  searchBox: string = '';

  // Declaration Product list
  productList = this.productService.productList;
  newProductList : Product[] = this.productList();

  // Buy Product Func
  buyProduct(product: Product) {
    product.isAvailable = false;
  }

  // Filter Product list
  searchByKeyword(){
    let keyWord = this.searchBox.trim().toLowerCase();

    if (keyWord === ""){
      this.newProductList = this.productList();
      return;
    }
    this.newProductList = this.productList().filter(product => product.name.toLowerCase().includes(keyWord));
  }
}
