import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarRef} from "@angular/material/snack-bar";
import {CustomSnackbarComponent} from "../shared/custom-snackbar/custom-snackbar.component";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly matSnackBar: MatSnackBar) {}

  openMessage(message: string | undefined): MatSnackBarRef<CustomSnackbarComponent> {
    const messageToDisplay = message === undefined ? 'Something went wrong' : message;

    return this.matSnackBar.openFromComponent<CustomSnackbarComponent>(CustomSnackbarComponent, {
      data: {
        message: messageToDisplay,
        icon: 'close',
      },
    });
  }

}
