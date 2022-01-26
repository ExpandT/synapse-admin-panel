import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { PublicWrapperComponent } from './public-wrapper/public-wrapper.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [ SignInComponent, PublicWrapperComponent ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
