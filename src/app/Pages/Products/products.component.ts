import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService } from '../../Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from 'src/app/Components/Header/header.component';
import { ProductComponent } from 'src/app/Components/Product/product.component';
import { Observable } from 'rxjs';
import { FilterProductsPipe } from 'src/app/Utils/Pipes/filterProducts.pipe';
import { State } from 'src/app/Services/state.service';
import { BaseComponent } from 'src/app/Components/Base/base.component';
import { LengthPipe } from 'src/app/Utils/Pipes/length.pipe';
import { Filters, Product } from 'src/app/Types';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ProductComponent,
    FilterProductsPipe,
    LengthPipe,
  ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent extends BaseComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  state: State = inject(State);
  productService: ProductService = inject(ProductService);
  products: Observable<Product[]>;
  filters: Filters = { search: '', color: [], size: [] };

  constructor() {
    super();
    this.filters.search = this.route.snapshot.queryParamMap.get('search') ?? '';
    this.state.setSearch(this.filters.search ?? '');
    this.products = this.productService.getAllProducts();
    this.state.searchState
      .pipe(this.unsubOnDestroy())
      .subscribe(
        (searchValue) =>
          (this.filters = { ...this.filters, search: searchValue })
      );
  }
}
