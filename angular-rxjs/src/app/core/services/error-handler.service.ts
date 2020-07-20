import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '@env/environment';

@Injectable()
export class ErrorLogService {
  private lastError: Error | string = new Error();

  constructor(private http: HttpClient) {}

  get getLastError() {
    return this.lastError;
  }

  private sendErrorToServer(error: any) {
    return this.http
      .post(`${appConfig.apiEndpoint}/log-error`, {
        message: error.stack.toString(),
      })
      .subscribe((response: any) => {});
  }

  public logError(error: Error) {
    if (appConfig.production && error) {
      if (this.lastError) {
        if (this.lastError === error.stack ? error.stack : error.toString())
          return;
      }

      this.lastError = error.message ? error.message : error.toString();

      this.sendErrorToServer(error);
    } else {
      this.lastError = error.stack ? error.stack : error.toString();
      console.error(error);
    }
  }
}
