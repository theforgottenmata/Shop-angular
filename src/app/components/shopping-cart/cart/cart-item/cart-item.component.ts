import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {CartService} from '../../../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;
  @Output() deletedUser: EventEmitter<boolean> = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  onDelete(userId: Number){
    this.cartService.deleteItem(userId).subscribe((data) => {
      this.deletedUser.emit(true);
    })
  }
}


