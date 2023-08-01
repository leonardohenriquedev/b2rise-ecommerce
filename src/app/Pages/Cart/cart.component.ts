import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BaseComponent } from 'src/app/Components/Base/base.component';
import { CartItemComponent } from 'src/app/Components/CartItem/cartItem.component';
import { HeaderComponent } from 'src/app/Components/Header/header.component';
import { State } from 'src/app/Services/state.service';
import { CartItem } from 'src/app/Types';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent extends BaseComponent {
  state: State = inject(State);
  carItems: CartItem[] = [];

  constructor() {
    super();

    this.state.cartItemsState
      .pipe(this.unsubOnDestroy())
      .subscribe((cartItems) => (this.carItems = [...cartItems]));
  }

  ngOnInit() {
    this.state.setSearch('');
  }
}
