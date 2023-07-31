import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../Header/header.component';
import { ProductService } from '../Services/products.service';

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
