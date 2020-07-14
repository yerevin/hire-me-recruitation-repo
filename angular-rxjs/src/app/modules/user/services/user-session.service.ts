import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUserModel } from '@app/modules/user/interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';
import { appConfig } from '@env/environment';

//region Constants
const SESSION_NAME = 'user_session';

//endregion

@Injectable({ providedIn: 'root' })
export class UserSessionService {
  //region Properties

  data = new BehaviorSubject<UserSessionData>(new UserSessionData());
  currentData = this.data.asObservable();

  //endregion

  constructor() {
    this.data.next(
      localStorage.getItem(SESSION_NAME)
        ? JSON.parse(
            localStorage.getItem(SESSION_NAME) as UserSessionData | any
          )
        : new UserSessionData()
    );
  }

  //region Accessors

  /**
   * Return user access token
   *
   * @returns {string}
   */
  get accessToken(): string {
    return this.data.getValue().accessToken;
  }

  /**
   * Return whether user has access token
   *
   * @returns {boolean}
   */
  get hasAccessToken(): boolean {
    return !!this.data.getValue().accessToken;
  }

  //endregion

  /**
   * Create session data
   *
   * @param accessToken
   */
  public createData(accessToken: string) {
    this.data.next({
      accessToken: accessToken,
    });

    localStorage.setItem(SESSION_NAME, JSON.stringify(this.data.getValue()));
  }

  /**
   * Destroy session data
   */
  public logOut() {
    this.data.next(new UserSessionData());

    localStorage.removeItem(SESSION_NAME);
  }

  //endregion
}

class UserSessionData {
  public accessToken: string = '';
}
