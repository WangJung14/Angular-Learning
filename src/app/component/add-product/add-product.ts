import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Product, ProductService } from '../../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  // Dependency Injection Product Service
  constructor(private productService: ProductService , private router :Router) {
  }

  newProductName: string = '';
  newProductPrice: number = 0;
  onSubmit(){
    const newProduct : Product = {
      name : this.newProductName,
      price : this.newProductPrice,
      isAvailable : true
    };
    this.productService.addProduct(newProduct);
    this.router.navigate(['/products'])
  }
}
