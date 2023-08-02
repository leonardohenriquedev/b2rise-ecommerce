import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../Types';

@Injectable({ providedIn: 'root' })
export class State {
  private readonly search$: BehaviorSubject<string> = new BehaviorSubject('');

  cartItems: CartItem[] = [];
  private cartItems$: BehaviorSubject<CartItem[]> = new BehaviorSubject(
    this.cartItems
  );

  setSearch(value: string) {
    this.search$.next(value);
  }

  addCartItem(item: CartItem) {
    const index = this.cartItems.findIndex(
      (cartItem) => cartItem.product.id === item.product.id
    );

    if (index !== -1) {
      this.cartItems[index] = {
        ...this.cartItems[index],
        quantity: this.cartItems[index].quantity + 1,
      };
    } else {
      this.cartItems.push(item);
    }

    this.cartItems$.next(this.cartItems);
  }

  removeCartItem(id: number) {
    const index = this.cartItems.findIndex(
      (cartItem) => cartItem.product.id === id
    );

    if (this.cartItems[index].quantity > 1) {
      this.cartItems[index] = {
        ...this.cartItems[index],
        quantity: this.cartItems[index].quantity - 1,
      };
    }
    this.cartItems$.next(this.cartItems);
  }

  deleteFromCart(id: number) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.product.id !== id
    );

    this.cartItems$.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartItems$.next(this.cartItems);
  }

  get searchState() {
    return this.search$.asObservable();
  }

  get cartItemsState() {
    return this.cartItems$.asObservable();
  }
}
