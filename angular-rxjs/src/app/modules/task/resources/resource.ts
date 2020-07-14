import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ITaskForm } from '../interfaces/task';

import { appConfig } from '@env/environment';

@Injectable()
export class TaskResource {
  // props

  private moduleUrl: string = `${appConfig.apiEndpoint}/task`;

  //endregion

  constructor(private http: HttpClient) {}

  //region Behaviors

  /**
   * @inheritDoc
   */
  public list(): Observable<any> {
    return this.http.get(`${this.moduleUrl}`);
  }

  /**
   * @inheritDoc
   */
  public get(id: string): Observable<any> {
    return this.http.get(`${this.moduleUrl}/${id}`);
  }

  /**
   * @inheritDoc
   */
  public create(task: ITaskForm): Observable<any> {
    return this.http.post(`${this.moduleUrl}`, task);
  }

  /**
   * @inheritDoc
   */
  public update(id: string, task: ITaskForm): Observable<any> {
    return this.http.put(`${this.moduleUrl}/${id}`, task);
  }

  /**
   * @inheritDoc
   */
  public delete(id: string): Observable<any> {
    return this.http.delete(`${this.moduleUrl}/${id}`);
  }

  //endregion
}
