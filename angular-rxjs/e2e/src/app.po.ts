import { browser, by, element } from 'protractor';

import { DATA } from './data.po';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  fillLoginForm() {
    element(by.id('email')).sendKeys(DATA.email);
    element(by.id('password')).sendKeys(DATA.password);
  }

  submitLoginForm() {
    element(by.css("button[type='submit']")).click();
  }

  getTasksListTitle(): Promise<string> {
    return element(by.tagName('h4')).getText() as Promise<string>;
  }

  openTaskAddForm() {
    element(by.id('addTaskBtn')).click();
  }

  fillTaskAddForm() {
    element(by.id('name')).sendKeys(DATA.addedTaskName);
  }

  submitTaskAddForm() {
    element(by.id('taskSaveBtn')).click();
  }

  getTaskOnListName(): Promise<string> {
    return element(by.xpath("//*[text()[normalize-space() = '" + 'Test' + "']]")).getText() as Promise<string>;
  }
}
