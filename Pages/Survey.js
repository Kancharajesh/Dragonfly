export class Survey {
  constructor(page) {
    this.page = page;

    // Locators
    this.Side_bar = page.locator("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)");
    this.Description = page.locator("(//div[contains(@class,'mt-[70px]')])[1]");

    //Create Sidebar Questions
    this.Clickplus = page.locator("(//div[contains(@class,'w-[100px] h-[44.44px] my-6 ml-[20px] absolute flex items-center justify-center bottom-[-16px] right-[-7px] z-10')])[1]");
    this.Titleslide = page.locator("(//div[contains(@class,'hover:bg-gray-100 rounded py-2')])[3]");
    this.Questionslide = page.locator("(//div[contains(@class,'hover:bg-gray-100 rounded py-2')])[2]");
    this.Mediaslide = page.locator("(//div[contains(@class,'hover:bg-gray-100 rounded py-2')])[1]");

    // Question
    this.Question_input = page.locator("//textarea[contains(@placeholder,'Add your question here...')]"); 
    this.Sub_Heading = page.locator(".flex.items-center.pr-3");

    // Different types 
    this.Answer_types = page.locator("div[class='p-3 bg-white grid grid-cols-3 gap-3 w-[273px] mx-2 mb-2 border border-[#E5E5EA] rounded-[6px]']");
    this.MCQ = page.locator("//p[normalize-space()='Multiple Choice']");
    this.Image = page.locator("//p[normalize-space()='Picture Choice']");
    this.Video = page.locator("(//div)[66]");
    this.YES_MCQ = page.locator("(//div)[69]");

    
}

  async Left_sidebar() {
    await this.Side_bar.isVisible();  
  }

  async fillQuestion(text) {
    await this.Question_input.fill(text);
  }

  async fillSubHeading(text) {
    await this.Sub_Heading.fill(text); 
  }

  async MCQTypes(){
    await this.Answer_types.isVisible();
  }

  async A_MCQ (){
    await this.MCQ.click();
  }

  async A_Image (){
    await this.Image.click();
  }

  // Adding Questions(Creating)
  async Click_plus (){
    await this.Clickplus.click();
  }

  async Media_Slide (){
    await this.Mediaslide.click();
  }

  async Question_Slide (){
    await this.Questionslide.click();
  }

  async Title_Slide (){
    await this.Titleslide.click();
  }

  async Description_Visible (){
    await this.Description.isVisible();
  }

}
