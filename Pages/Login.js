export class Login {
  constructor(page) {
    this.page = page;
    this.Email_input = "input[placeholder='Enter email here']";
    this.Password_input = "input[placeholder='Enter password here']";
    this.Login_button = ".loginpage_loginButton__5ocqs";
    this.Home_Create_survey = "div[class='flex bg-[#6937D3] text-white px-[51px] h-[61px] items-center gap-5 cursor-pointer']";
  }

  async launchBrowser() {
    await this.page.goto("https://dragonfly-frontend-web-742218002331.asia-south1.run.app/login");
  }

  async enterEmail(email) {
    await this.page.fill(this.Email_input, email);
  }

  async enterPassword(password) {
    await this.page.fill(this.Password_input, password);
  }

  async clickLoginButton() {
    await this.page.click(this.Login_button);
  }

  async HomeSurvey(){
    await this.page.click(this.Home_Create_survey);
  }

  async doLogin(email, password) {
    await this.launchBrowser();
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginButton();
    // await this.HomeSurvey();
  }
}
