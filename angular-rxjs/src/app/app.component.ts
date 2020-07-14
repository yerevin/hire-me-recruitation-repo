import { Component } from '@angular/core';

import { appConfig } from '@env/environment';

import '../assets/styles/styles.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {
    console.log('appConfig', appConfig);
  }
}
