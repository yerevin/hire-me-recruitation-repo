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
  });

  it('should open task add form and add task then show tasks list page', async () => {
    page.openTaskAddForm();
    page.fillTaskAddForm();
    page.submitTaskAddForm();
    expect(page.getTasksListTitle()).toEqual('Tasks');
  });

  it("should find added task - 'Test' on list", async () => {
    expect(page.getTaskOnListName()).toEqual(DATA.addedTaskName);
  });

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
