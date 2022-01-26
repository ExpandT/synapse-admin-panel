import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../auth.service";
import {NotificationService} from "../../core/notification.service";
import {TokenStorageService} from "../../core/token-storage.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";
import {LoginResponse} from "../../interfaces/login-response";

@Component({
  selector: 'sap-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  form = this.formBuilder.group({
    username: [''],
    password: [''],
    confirm_password: [''],
    terms_conditions: false,
  });

  get isChecked(): boolean {
    return this.form.get('terms_conditions')?.value === true;
  }

  constructor(private readonly formBuilder: FormBuilder,
              private readonly authService: AuthService,
              private readonly notificationService: NotificationService,
              private readonly tokenStorageService: TokenStorageService,
              private readonly router: Router
  ) { }

  register():void {
    const registerData = this.form.getRawValue();

    this.authService.register(registerData).pipe(tap((res: LoginResponse) => {
      if(!res.success) {
        this.notificationService.openMessage(res.message);

        return;
      } else if (res.success) {
        this.tokenStorageService.storeToken(res.token)
        this.router.navigate(['']);
      }
    })).subscribe();
  }
}
