import { Routes } from '@angular/router';
import { CartComponent } from './Pages/Cart/cart.component';
import { ProductsComponent } from './Pages/Products/products.component';
import { HomeComponent } from './Pages/Home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'B2RISE - Ecommerce' },
  { path: 'cart', component: CartComponent, title: 'B2RISE - Carrinho' },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'B2RISE - Produtos',
  },
];

export default routes;
