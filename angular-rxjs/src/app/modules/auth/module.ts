import { NgModule } from '@angular/core';

import { SharedModule } from '@app/core/shared/shared.module';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';

import { ROUTING } from '@app/modules/auth/routing';
import { AuthSharedModule } from '@app/modules/auth/shared.module';

@NgModule({
  declarations: [],
  exports: [],
  imports: [ROUTING, SharedModule, AuthSharedModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: ['core', 'auth'] }],
})
export class AuthModule {}
