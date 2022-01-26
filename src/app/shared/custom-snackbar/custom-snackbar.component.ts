import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from "@angular/material/snack-bar";
import {CustomSnackbarConfig} from "./custom-snackbar-config";

@Component({
  selector: 'sap-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSnackbarComponent {
  constructor(
    private snackRef: MatSnackBarRef<CustomSnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: CustomSnackbarConfig
  ) {}

  closeSnackBar(): void {
    this.snackRef.dismiss();
  }
}
