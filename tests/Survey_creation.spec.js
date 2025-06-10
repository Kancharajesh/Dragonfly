import { test, expect } from "@playwright/test";
import { Login } from "../Pages/Login";
import { Survey } from "../Pages/Survey";
import { MCQ } from "../Pages/MCQ";
import { timeLog } from "console";

  export const loginAsDefaultUser = async (page) => {
      const login = new Login(page);
      await login.doLogin("testdragon@gmail.com", "12345@6");

  }


test("Create Description Question", async ({ page }) => {
  const login = new Login(page);
  const survey = new Survey(page);
  const Mcq = new MCQ(page);

  // Login
 await loginAsDefaultUser(page);
  // Go to Create Survey
  await login.HomeSurvey();
  await page.waitForTimeout(3000);

  // Fill Question field
  await survey.fillQuestion("Title Slide Question text");
  await expect(survey.Question_input).toHaveValue("Title Slide Question text");
  await page.waitForTimeout(2000);

  // Settings.
  await page.waitForTimeout(3000);
  await Mcq.Description();

  await Mcq.Description_minChar("2");
  await Mcq.Description_maxChar("10");
  await Mcq.Description_placeHolder("Testing");
  await page.waitForTimeout(5000);
});

test("MCQ Question creation", async ({ page }) => {
  const login = new Login(page);
  const survey = new Survey(page);
  const Mcq = new MCQ(page);

  // Login
 await loginAsDefaultUser(page);
  await login.HomeSurvey();
  await page.waitForTimeout(3000);

  await survey.A_MCQ();

  // Fill Question and options text
  await survey.fillQuestion("multiple choice Question");
  await expect(survey.Question_input).toHaveText("multiple choice Question");
  await Mcq.MCQ_1("SuperJ");
  await Mcq.MCQ_2("Jupiter");
  await Mcq.MCQ_3("testing");
  await page.waitForTimeout(2000);
  await Mcq.MCQ_Addchoice();
  await page.waitForTimeout(3000);

  // Create One Title Slide
  await survey.Click_plus();
  await survey.Title_Slide();
  await survey.Description_Visible();
  await page.waitForTimeout(5000);
});

test("MCQ and Description opiton", async ({ page }) => {
  const login = new Login(page);
  const survey = new Survey(page);
  const Mcq = new MCQ(page);

  // Login
 await loginAsDefaultUser(page);
  await login.HomeSurvey();

  await survey.A_MCQ();

  // Fill Question and options text
  await page.waitForTimeout(3000);
  await survey.fillQuestion("multiple choice Question");
  await expect(survey.Question_input).toHaveText("multiple choice Question");
  await Mcq.MCQ_1("SuperJ");
  await Mcq.MCQ_2("Jupiter");
  await Mcq.MCQ_3("testing");

  // Settings.
  await page.waitForTimeout(3000);
  await Mcq.Description();

  await Mcq.Description_minChar("2");
  await Mcq.Description_maxChar("10");
  await Mcq.Description_placeHolder("Testing");
  await page.waitForTimeout(5000);
});

test("MCQ & Explanation ", async ({ page }) => {
  const login = new Login(page);
  const survey = new Survey(page);
  const Mcq = new MCQ(page);

  // Login
 await loginAsDefaultUser(page);
  await login.HomeSurvey();
  await page.waitForTimeout(3000);
  await survey.A_MCQ();

  // Fill Question and options text
  await page.waitForTimeout(2000);
  await survey.fillQuestion("multiple choice Question");
  await expect(survey.Question_input).toHaveText("multiple choice Question");
  await Mcq.MCQ_1("SuperJ");
  await Mcq.MCQ_2("Jupiter");
  await Mcq.MCQ_3("testing");

  // Settings.
  await page.waitForTimeout(2000);
  await Mcq.Explain();
  await Mcq.Explain_Filed_visible();

  await Mcq.Explain_minChar("2");
  await Mcq.Description_maxChar("30");
  await page.waitForTimeout(1000);

  // Add & Verify.
  await Mcq.Explain_field_1("Hey Hello How are you?");
  // await expect(Mcq.S_Explain_Field1).toHaveText("Hey Hello How are you?");

  await Mcq.Explain_field_2("How are you?");
  await Mcq.Explain_field_3("Hello");
  await page.waitForTimeout(3000);
});

test("MCQ & Other and Nones", async({page})=>{
  const login = new Login(page);
  const survey = new Survey(page);
  const Mcq = new MCQ(page);

  // Login
 await loginAsDefaultUser(page);
  await login.HomeSurvey();
  await page.waitForTimeout(3000);
  await survey.A_MCQ();

  // Fill Question and options text
  await page.waitForTimeout(1000);
  await survey.fillQuestion("multiple choice Question");
  await expect(survey.Question_input).toHaveText("multiple choice Question");
  await Mcq.MCQ_1("SuperJ");
  await Mcq.MCQ_2("Jupiter");
  await Mcq.MCQ_3("testing");

  // Settings.
  await page.waitForTimeout(2000);
  await Mcq.Others();
  await Mcq.Option_Other_Visible();
  await page.waitForTimeout(2000);

  await Mcq.None();
  await Mcq.None_option_visible();
  await page.waitForTimeout(2000);

});