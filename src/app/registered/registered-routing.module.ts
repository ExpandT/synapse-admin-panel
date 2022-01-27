import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {RegisteredComponent} from "./registered.component";
import {ProductResolver} from "./product-list/product.resolver";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

const routes: Routes = [
  {
    path: '',
    component: RegisteredComponent,
    children: [
  {
    path: 'product-list',
    component: ProductListComponent,
    resolve: {
      products: ProductResolver,
    }
  },
  {
    path: 'detail/:id',
    component: ProductDetailComponent,
    resolve: {
      products: ProductResolver,
    }
  },
  {
    path: '',
    redirectTo: 'product-list',
    pathMatch: 'full',
  },
  ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisteredRoutingModule { }
