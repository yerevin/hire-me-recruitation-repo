import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  PageNotFoundComponent,
  BasicLayoutComponent,
  NavigationComponent,
} from './components/';
import { SafePipe } from './pipes/safe.pipe';
import { Mapping } from './pipes/map.pipe';
import { TranslocoModule } from '@ngneat/transloco';

@NgModule({
  declarations: [
    BasicLayoutComponent,
    NavigationComponent,
    PageNotFoundComponent,
    SafePipe,
    Mapping,
  ],
  imports: [RouterModule, CommonModule, TranslocoModule],
  exports: [RouterModule, CommonModule, SafePipe, Mapping, TranslocoModule],
})
export class SharedModule {}
