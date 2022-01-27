import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../auth.service";
import {tap} from "rxjs";
import {NotificationService} from "../../core/notification.service";
import {Router} from "@angular/router";
import {LoginResponse} from "../../interfaces/login-response";
import {TokenStorageService} from "../../core/token-storage.service";

@Component({
  selector: 'sap-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {

  form = this.formBuilder.group({
    username: [''],
    password: [''],
  });


  constructor(private readonly formBuilder: FormBuilder,
              private readonly authService: AuthService,
              private readonly notificationService: NotificationService,
              private readonly tokenStorageService: TokenStorageService,
              private readonly router: Router
  ) { }

  login():void {
    const loginData = this.form.getRawValue();

    this.authService.login(loginData).pipe(tap((res: LoginResponse) => {
      if(res.success === false) {
        this.notificationService.openMessage(res.message);

        return;
      } else if (res.success === true) {
        this.tokenStorageService.storeToken(res.token)
        this.router.navigate(['']);
      }
    })).subscribe();
  }

}
