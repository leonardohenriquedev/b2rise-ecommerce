import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from 'src/app/Components/Header/header.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  // productService: ProductService = inject(ProductService);
  // async getAllProducts() {
  //   const products = await this.productService.getAllProducts();
  //   console.log(products);
  // }
  // constructor() {
  //   this.getAllProducts();
  // }
}
