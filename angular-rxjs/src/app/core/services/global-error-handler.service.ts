import { Injectable, ErrorHandler } from "@angular/core";

import { ErrorLogService } from "./error-handler.service";

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private errorLogService: ErrorLogService) {
    super();
  }

  handleError(error: any) {
    this.errorLogService.logError(error);
  }
}
