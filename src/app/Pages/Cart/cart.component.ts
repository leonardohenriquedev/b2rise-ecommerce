import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BaseComponent } from 'src/app/Components/Base/base.component';
import { CartItemComponent } from 'src/app/Components/CartItem/cartItem.component';
import { HeaderComponent } from 'src/app/Components/Header/header.component';
import { State } from 'src/app/Services/state.service';
import { CartItem } from 'src/app/Types';
import { CurrencyHelper } from 'src/app/Utils/formatToBRL';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent extends BaseComponent {
  state: State = inject(State);
  currencyHelper: CurrencyHelper = inject(CurrencyHelper);
  carItems: CartItem[] = [];
  total: number = 0;

  constructor() {
    super();

    this.state.cartItemsState
      .pipe(this.unsubOnDestroy())
      .subscribe((cartItems) => {
        this.carItems = [...cartItems];

        this.total = cartItems.reduce(
          (accumulator, cartItem) =>
            accumulator + cartItem.product.price * cartItem.quantity,
          0
        );
      });
  }

  ngOnInit() {
    this.state.setSearch('');
  }
}
