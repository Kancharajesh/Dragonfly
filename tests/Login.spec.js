import { test, expect } from "@playwright/test";
import { Login } from "../Pages/Login";

test("Dashboard opens after login", async ({ page }) => {
  const login = new Login(page);

  await login.doLogin("testdragon@gmail.com", "12345@6");

  await expect(page).toHaveURL("https://dragonfly-frontend-web-742218002331.asia-south1.run.app/");
});
