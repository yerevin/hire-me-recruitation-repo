import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { DATA } from './data.po';

describe('app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should log in user and show tasks list page', async () => {
    page.navigateTo();
    page.fillLoginForm();
    page.submitLoginForm();
    expect(page.getTasksListTitle()).toEqual('Tasks');
    // browser.sleep(5000);
  });

  it('should open task add form and add task then show tasks list page', async () => {
    page.openTaskAddForm();
    page.fillTaskAddForm();
    page.submitTaskAddForm();
    expect(page.getTasksListTitle()).toEqual('Tasks');
    // browser.sleep(5000);
  });

  it("should find added task - 'Test' on list", async () => {
    expect(page.getTaskOnListName()).toEqual(DATA.addedTaskName);
    // browser.sleep(5000);
  });

  // it('should match a form with a "loginForm" name then fill its controls', async () => {
  //   page.fillLoginForm()
  //   await expect(page).toFillForm('form[name="loginForm"]', {
  //     email: 'test@test.com',
  //     password: 'testtest',
  //   });
  // });

  // it('should find login submit button and click it to process login', async () => {
  //   await expect(page).toClick('#loginBtn');
  //   await page.waitFor(1000);
  // });

  // it('should display Tasks page', async () => {
  //   await expect(page).toMatch('Tasks');
  // });

  // it('should find add task button and click it to open add task form', async () => {
  //   await expect(page).toClick('#addTaskBtn');
  // });

  // it('should match a form with a "taskForm" name then fill its controls', async () => {
  //   await expect(page).toFillForm('form[name="taskForm"]', {
  //     name: 'Test',
  //   });
  // });

  // it('should find submit button and click it to add task', async () => {
  //   await expect(page).toClick('#taskSaveBtn');
  //   await page.waitFor(1000);
  // });

  // it('should display Tasks page', async () => {
  //   await expect(page).toMatch('Tasks');
  // });

  // it("should find added task - 'Test' on list", async () => {
  //   await expect(page).toMatch('Test');
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
