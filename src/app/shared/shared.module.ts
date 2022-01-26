import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSnackbarComponent } from './custom-snackbar/custom-snackbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";



@NgModule({
  declarations: [
    CustomSnackbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
  ]
})
export class SharedModule { }
