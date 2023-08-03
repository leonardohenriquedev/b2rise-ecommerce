import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BaseComponent } from '../Base/base.component';
import { State } from 'src/app/Services/state.service';
import { Product } from 'src/app/Types';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent extends BaseComponent {
  @Input() product!: Product;
  state: State = inject(State);

  addToCart() {
    this.state.addCartItem({ product: this.product, quantity: 1 });
  }

  constructor() {
    super();
  }
}
