import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisteredRoutingModule } from './registered-routing.module';
import { RegisteredComponent } from './registered.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTableModule} from "@angular/material/table";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {NgxStarRatingModule} from "ngx-star-rating";
import {ReactiveFormsModule} from "@angular/forms";
import { ReviewBlockComponent } from './product-detail/review-block/review-block.component';
import {IconRegisterService} from "../core/icon-register.service";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    RegisteredComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    ReviewBlockComponent
  ],
  imports: [
    CommonModule,
    RegisteredRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    MatButtonModule,
  ]
})
export class RegisteredModule {
  constructor(private readonly iconsRegisterService: IconRegisterService) {
    iconsRegisterService.registerIcon('shopping-basket', '/assets/images/shopping-basket.svg');
    iconsRegisterService.registerIcon('logout', '/assets/images/logout.svg');
  }

}
