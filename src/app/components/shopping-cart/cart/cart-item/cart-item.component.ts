import { Component, OnInit, Input } from '@angular/core';
import {CartItem} from '../../../../models/cart-item';
import {MessengerService} from '../../../../services/messenger.service';
import {CartService} from '../../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  handleRemoveItem(){
    this.cartService.removeFromCart(this.cartItem.id).subscribe(
      () => console.log(`deleted ${this.cartItem.id}`)
    );
  }
}


