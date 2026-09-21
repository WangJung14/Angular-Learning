import { Injectable, signal } from '@angular/core';

export interface Product {
  name : string,
  price : number,
  isAvailable : boolean
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // signal sẽ hoạt động như 1 chiếc loa phát thanh, khi bọc dữ liệu bên trong 1 mảng signal , bất kỳ component nào muốn dùng dữ liệu thì phải đăng ký nghe đài
  // Khi dữ liệu bên trong thay đổi signal sẽ thông báo cho các component đang đăng ký lắng nghe signal
  productList = signal<Product[]> ([{
    name : "Iphone 19",
    price : 19999,
    isAvailable : true
  },
    {
      name : "SamsungS24",
      price : 18888,
      isAvailable : true
    },
    {
      name : "OppoReno14",
      price : 17777,
      isAvailable : true
    }])

  // Get all product in product list
  getAllProducts(){
    return this.productList(); // them () để mở hộp
  }

  // Add new product
  addProduct(newProduct : Product){
    // ... là Spread Operator (toán tử giải nén) - ở đây mình dùng để giải nén các phần tử trong oldList ra
    // oldList = [S1,S2,S3], ...oldList = S1, S2 , S3
    this.productList.update(oldList => [...oldList,newProduct]);
  }
}
