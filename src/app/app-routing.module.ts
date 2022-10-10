import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListEmailsComponent } from './components/list-emails/list-emails.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list-emails' },
  { path: 'list-emails', component: ListEmailsComponent },
  { path: 'list-products', component: ListProductsComponent },
  { path: 'add-product', component: AddProductComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }