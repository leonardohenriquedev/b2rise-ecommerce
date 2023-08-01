import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../Services/products.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HeaderComponent } from 'src/app/Components/Header/header.component';
import { ProductComponent } from 'src/app/Components/Product/product.component';
import { Product } from 'src/app/Types/product.type';
import { SearchComponent } from 'src/app/Components/Search/search.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService: ProductService = inject(ProductService);
  searchInput: string | null = null;
  products: Product[] = [];

  async getAllProducts() {
    const products = await this.productService.getAllProducts();
    return products;
  }

  getFilteredProducts(products: Product[]) {
    const term = this.searchInput ?? ''.toLowerCase();

    const filteredProducts = products.filter((product) => {
      return (
        product.description.toLowerCase().includes(term) ||
        product.longDescription.toLowerCase().includes(term)
      );
    });
    return filteredProducts;
  }

  constructor(private router: Router) {
    this.searchInput = this.route.snapshot.queryParamMap.get('search') ?? null;
    this.getAllProducts().then((products) => {
      if (this.searchInput) {
        this.products = this.getFilteredProducts(products);
      } else {
        this.products = products;
      }
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.searchInput =
          this.route.snapshot.queryParamMap.get('search') ?? null;

        this.getAllProducts().then((products) => {
          if (this.searchInput) {
            this.products = this.getFilteredProducts(products);
          } else {
            this.products = products;
          }
        });
      }
    });
  }
}
