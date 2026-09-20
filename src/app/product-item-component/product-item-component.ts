import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Product {
  name : string ,
  price : number,
  isAvailable : boolean
}

@Component({
  selector: 'app-product-item-component',
  imports: [],
  templateUrl: './product-item-component.html',
  styleUrl: './product-item-component.css',
})
export class ProductItemComponent {
  @Input() itemData! : Product;

  @Output() onBuy = new EventEmitter<Product>();
  handleBuyClick(){
    this.onBuy.emit(this.itemData);
  }
}
