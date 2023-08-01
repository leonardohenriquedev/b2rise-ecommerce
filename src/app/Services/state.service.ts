import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../Types';

@Injectable({ providedIn: 'root' })
export class State {
  private readonly search$: BehaviorSubject<string> = new BehaviorSubject('');

  cartItems: CartItem[] = [
    {
      product: {
        id: 1,
        description: 'Camisa Verde',
        longDescription:
          'Camisa verde militar com detalhes em botões, uma opção estilosa e prática para o seu dia a dia. O verde militar é uma cor que nunca sai de moda. Disponível no tamanho: M.',
        price: 119.75,
      },
      quantity: 1,
    },
    {
      product: {
        id: 2,
        description: 'Camisa Verde',
        longDescription:
          'Camisa verde militar com detalhes em botões, uma opção estilosa e prática para o seu dia a dia. O verde militar é uma cor que nunca sai de moda. Disponível no tamanho: M.',
        price: 119.75,
      },
      quantity: 1,
    },

    {
      product: {
        id: 3,
        description: 'Camisa Verde',
        longDescription:
          'Camisa verde militar com detalhes em botões, uma opção estilosa e prática para o seu dia a dia. O verde militar é uma cor que nunca sai de moda. Disponível no tamanho: M.',
        price: 119.75,
      },
      quantity: 1,
    },

    {
      product: {
        id: 4,
        description: 'Camisa Verde',
        longDescription:
          'Camisa verde militar com detalhes em botões, uma opção estilosa e prática para o seu dia a dia. O verde militar é uma cor que nunca sai de moda. Disponível no tamanho: M.',
        price: 119.75,
      },
      quantity: 1,
    },

    {
      product: {
        id: 5,
        description: 'Camisa Verde',
        longDescription:
          'Camisa verde militar com detalhes em botões, uma opção estilosa e prática para o seu dia a dia. O verde militar é uma cor que nunca sai de moda. Disponível no tamanho: M.',
        price: 119.75,
      },
      quantity: 1,
    },
  ];
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

  get searchState() {
    return this.search$.asObservable();
  }

  get cartItemsState() {
    return this.cartItems$.asObservable();
  }
}
