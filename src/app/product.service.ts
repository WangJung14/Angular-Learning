import { inject, Injectable, signal } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

export interface Product {
  name : string,
  price : number,
  stock : number,
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  // signal sẽ hoạt động như 1 chiếc loa phát thanh, khi bọc dữ liệu bên trong 1 mảng signal , bất kỳ component nào muốn dùng dữ liệu thì phải đăng ký nghe đài
  // Khi dữ liệu bên trong thay đổi signal sẽ thông báo cho các component đang đăng ký lắng nghe signal
  productList = signal<Product[]>([]);
  isLoading = signal<boolean>(false);

  // constructor ở đây sẽ tự động gọi API khi app chạy
  constructor() {
    this.fetchProducts();
  }

  fetchProducts(){
    this.isLoading.set(true); // is loading...

    // api url
    const apiUrl = 'http://localhost:8080/products';

    // Call HTTP GET method and listening result by using subcribe
    this.http.get<Product[]>(apiUrl).subscribe({
      next : (data) =>{
        // get API success
        this.productList.set(data); // thêm dữ liệu thật vào Signal
        this.isLoading.set(false); // cập nhật lại trạng thái đang tải
      },
      error : (err) =>{
        // Bắt lỗi khi fetch thất bại
        console.log('Error while loading data', err);
        this.isLoading.set(false); // tắt để giao diện trong bị treo
      }
    })

  }

  // Get all product in product list
  getAllProducts() {
    return this.productList(); // them () để mở hộp
  }

  // Add new product
  addProduct(newProduct: Product) {
    // ... là Spread Operator (toán tử giải nén) - ở đây mình dùng để giải nén các phần tử trong oldList ra
    // oldList = [S1,S2,S3], ...oldList = S1, S2 , S3
    this.productList.update((oldList) => [...oldList, newProduct]);
  }
}
