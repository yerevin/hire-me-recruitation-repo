import { Injectable } from '@angular/core';

import { AuthResource } from '@app/modules/auth/resources/resource';
import { ICredentials } from '@app/modules/auth/interfaces/credentials.interface';

@Injectable()
export class AuthService {
  //region Properties

  //endregion

  //region Events

  //endregion

  constructor(private authResource: AuthResource) {}

  //region Accessors

  //endregion

  //region Behaviors

  /**
   * Log user in
   *
   * @returns {Promise<any>}
   */
  public login(credentials: ICredentials) {
    return this.authResource.login(credentials);
  }

  /**
   * Register user in
   *
   * @returns {Promise<any>}
   */
  public signup(credentials: ICredentials) {
    return this.authResource.signup(credentials);
  }

  //endregion
}
