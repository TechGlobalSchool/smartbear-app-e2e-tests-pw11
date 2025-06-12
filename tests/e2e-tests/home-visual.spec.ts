import { test, expect } from "./../../fixtures/PageObject";
import { ScreenshotUtils } from "../../utils/ScreenshotUtils";
import { Snapshots } from "../../test-snapshots/Snapshots";

test.describe("SmartBear App Home Page visual verification @Home @Smoke", () => {
  test("Home Page Visual Regression", async ({ basePage }) => {
    await expect(basePage.loginInfo).toBeVisible();
    await ScreenshotUtils.takeScreenshot(basePage.page);
  });

  test("SmartBear App Home Page snapshot verification", async ({
    basePage,
  }) => {
    await expect(basePage.body).toMatchAriaSnapshot(Snapshots.homePageDefault);
  });
});