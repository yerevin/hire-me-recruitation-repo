import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from '@app/core/shared/shared.module';

import { LoginFormComponent } from '@app/modules/auth/components/login/login.component';
import { SignupFormComponent } from '@app/modules/auth/components/signup/signup.component';

import { AuthResource } from '@app/modules/auth/resources/resource';
import { AuthService } from '@app/modules/auth/services/service';
import { AuthGuard } from '@app/modules/auth/services/guard';

@NgModule({
  declarations: [LoginFormComponent, SignupFormComponent],
  exports: [LoginFormComponent, SignupFormComponent],
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  providers: [AuthResource, AuthService, AuthGuard],
})
export class AuthSharedModule {}
