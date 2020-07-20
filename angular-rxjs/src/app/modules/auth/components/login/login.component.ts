import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  Validators,
  FormControl,
  FormGroup,
} from '@angular/forms';

import { finalize } from 'rxjs/operators';

import { AuthService } from '@app/modules/auth/services/service';
import { UserSessionService } from '@app/modules/user/services/user-session.service';
import { ICredentials } from '@app/modules/auth/interfaces/credentials.interface';

/**
 * Component for display auth screen
 */
@Component({
  selector: 'login-form',
  templateUrl: 'login.component.html',
})
export class LoginFormComponent {
  //region Properties

  auth: ICredentials = {
    email: '',
    password: '',
  };
  authForm: FormGroup = this.formBuilder.group({
    email: new FormControl(this.auth.email, [Validators.required]),
    password: new FormControl(this.auth.password, [Validators.required]),
  });

  busy = {
    action: false,
  };

  //endregion

  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    public userSessionService: UserSessionService
  ) {}

  onLogin(formData: ICredentials): void | string {
    if (!this.authForm.valid) return 'Form not valid';

    this.busy.action = true;
    this.authService
      .login(formData)
      .pipe(finalize(() => (this.busy.action = false)))
      .subscribe(
        (response) => {
          console.log(response);
          this.userSessionService.createData(response.accessToken);

          this.router.navigateByUrl('/task');
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onSubmit(formData: ICredentials) {
    return this.onLogin(formData);
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }
}
