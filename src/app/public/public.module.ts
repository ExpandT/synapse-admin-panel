import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { PublicWrapperComponent } from './public-wrapper/public-wrapper.component';
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import { SignUpComponent } from './sign-up/sign-up.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [ SignInComponent, PublicWrapperComponent, SignUpComponent ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatCheckboxModule,
    ]
})
export class PublicModule { }
