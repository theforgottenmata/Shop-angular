import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from 'src/app/models/product';
import {CartService} from '../../../services/cart.service';
import {CartItem} from '../../../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0;

  constructor(private msg: MessengerService, private cartService: CartService) { }

  ngOnInit() {
    this.handlerSubscription();
    this.loadCartItems();
    this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems;
    })
  }

  handlerSubscription(){
    this.msg.getMsg().subscribe((product: Product) => {
      this.loadCartItems();
    });
  }

  loadCartItems(){
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    });
  }

  calcCartTotal(){
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  }
  reloadCurrentPage(){
    this.loadCartItems()
  }
}
