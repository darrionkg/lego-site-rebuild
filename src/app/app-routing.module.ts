import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent} from './main-home-component/index/index.component';
import { ShopComponent} from './shop/shop.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'shop', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
