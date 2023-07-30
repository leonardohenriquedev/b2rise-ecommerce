import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { CartComponent } from './Cart/cart.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'B2RISE - Ecommerce' },
  { path: 'cart', component: CartComponent, title: 'B2RISE - Carrinho' },
];

export default routes;
