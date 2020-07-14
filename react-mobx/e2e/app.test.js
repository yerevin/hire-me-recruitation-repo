const path = require("path");

describe("app", () => {
  beforeAll(async () => {
    await page.setViewport({ width: 1410, height: 1024, deviceScaleFactor: 2 });
    await page.goto("http://localhost:3000");
  });

  it("should display Login page", async () => {
    await expect(page).toMatch("Log in");
  });

  it('should match a form with a "loginForm" name then fill its controls', async () => {
    await expect(page).toFillForm('form[name="loginForm"]', {
      email: "test@test.com",
      password: "testtest",
    });
  });

  it("should find login submit button and click it to process login", async () => {
    await expect(page).toClick("#loginBtn");
    await page.waitFor(1000);
  });

  it("should display Tasks page", async () => {
    await expect(page).toMatch("Tasks");
  });

  it("should find add task button and click it to open add task form", async () => {
    await expect(page).toClick("#addTaskBtn");
  });

  it('should match a form with a "taskForm" name then fill its controls', async () => {
    await expect(page).toFillForm('form[name="taskForm"]', {
      name: "Test",
    });
  });

  it("should find submit button and click it to add task", async () => {
    await expect(page).toClick("#taskSaveBtn");
    await page.waitFor(1000);
  });

  it("should display Tasks page", async () => {
    await expect(page).toMatch("Tasks");
  });

  it("should find added task - 'Test' on list", async () => {
    await expect(page).toMatch("Test");
  });
});
