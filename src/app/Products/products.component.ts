import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../Header/header.component';
import { ProductService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  searchInput: string = '';

  async getAllProducts() {
    const products = await this.productService.getAllProducts();
    console.log(products);
  }
  constructor() {
    this.getAllProducts();
    this.searchInput = this.route.snapshot.queryParamMap.get('search') ?? '';
  }
}
