import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserSessionService } from '@app/modules/user/services/user-session.service';

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.component.html',
})
export class NavigationComponent {
  constructor(
    private router: Router,
    private userSessionService: UserSessionService
  ) {}

  //region Accessors

  //endregion

  //region Life cycle

  //endregion

  //region Event listeners

  logout() {
    this.userSessionService.logOut();

    this.router.navigateByUrl('/auth/log-in');
  }

  //endregion
}
