import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartItem, Product } from 'src/app/Types';
import { BaseComponent } from '../Base/base.component';
import { State } from 'src/app/Services/state.service';
import { CurrencyHelper } from 'src/app/Utils/formatToBRL';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cartItem.component.html',
  styleUrls: ['./cartItem.component.css'],
})
export class CartItemComponent extends BaseComponent {
  @Input() cartItem!: CartItem;
  state: State = inject(State);
  currencyHelper: CurrencyHelper = inject(CurrencyHelper);

  addToCart(cartItem: Product) {
    this.state.addCartItem({ product: cartItem, quantity: 1 });
  }

  removeFromCart(id: number) {
    this.state.removeCartItem(id);
  }

  constructor() {
    super();
  }
}
