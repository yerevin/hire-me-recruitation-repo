import { HttpClient } from '@angular/common/http';
import {
  Translation,
  TRANSLOCO_LOADER,
  TranslocoLoader,
} from '@ngneat/transloco';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpLoader implements TranslocoLoader {
  constructor(private http: HttpClient) {}

  getTranslation(langPath: string) {
    let [multiplePaths, activeLang] = langPath.split('/');
    let splittedMultiplePaths = multiplePaths.split(',');

    let obs: Observable<any>[] = [];
    splittedMultiplePaths.forEach((path) => {
      obs.push(
        this.http.get<Translation>(`/assets/i18n/${path}/${activeLang}.json`)
      );
    });

    return forkJoin([...obs]).pipe(
      map(([translation, vendor]) => {
        return { ...translation, ...vendor };
      })
    );
  }
}

export const translocoLoader = {
  provide: TRANSLOCO_LOADER,
  useClass: HttpLoader,
};
