import { time } from "console";

export class MCQ{
    constructor(page) {
        this.page=page;

       //MCQ option types
    this.MCQ1 = page.locator("//input[@placeholder='Choice 1']");
    this.MCQ2 = page.locator("//input[@placeholder='Choice 2']");
    this.MCQ3 = page.locator("//input[@placeholder='Choice 3']");
    this.MCQ4 = page.locator("//input[@placeholder='Choice 4']");
    this.MCQAddChoice = page.locator("//button[@class='text-[#6937d3] my-6 text-sm font-medium py-2 px-3']");
 
    // Settings fields.
    this.S_MultipleSelection = page.locator("//span[normalize-space()='Multiple Selection']");
    
    // Explanation True.
    this.S_Explain = page.locator("//span[normalize-space()='Explanation Field']");
    this.S_Explain_minchar = page.locator("(//input[@value='0'])[1]");
    this.S_Explain_maxchar = page.locator("(//input[@value='0'])[2]");
    this.S_Explain_Field1 = page.locator("(//input[contains(@placeholder,'Add your Question here')])[1]");
    this.S_Explain_Field2 = page.locator("(//input[contains(@placeholder,'Add your Question here')])[2]");
    this.S_Explain_Field_Cancel = page.locator("(//img[contains(@alt,'image')])[1]"); 

    // Description.
    this.S_Description = page.locator("//span[normalize-space()='Description Field']");
    this.S_Description_field = page.locator("(//div[contains(@class,'flex flex-col mb-[71.5px] gap-4 relative mr-[100px] ml-[88px] mt-[44px]')])[1]");
    this.S_Description_minChar= page.locator("(//input[@value='0'])[1]");
    this.S_Description_maxChar = page.locator("(//input[@value='0'])[1]");
    this.S_Description_placeHolder = page.locator("//input[@placeholder='Describe your answer...']");

    this.S_Other = page.locator("//span[normalize-space()='Other']");
    this.S_None = page.locator("//span[normalize-space()='None']");    

    }

    // MCQ
  async MCQ_1 (text){
    await this.MCQ1.fill(text);
  }
  async MCQ_2 (text){
    await this.MCQ2.fill(text);
  }
  async MCQ_3 (text){
    await this.MCQ3.fill(text);
  }
  async MCQ_4 (text){
    await this.MCQ4.fill(text);
  }
  async MCQ_4_visible (){
    await this.MCQ4.isVisible();
  }

  async MCQ_Addchoice (){
    await this.MCQAddChoice.click();
  }

  //Settings
  async Multiple_selection(){
    await this.S_MultipleSelection.click();
}

async Explain (){
    await this.S_Explain.click();
}
 
async Others (){
    await this.S_Other.click();
}

async None (){
    await this.S_None.click();
}

async Description(){
    await this.S_Description.click();
}

async Description_visible(){
    await this.S_Description_field.isVisible();
}

async Description_minChar (text){
    await this.S_Description_minChar.fill(text)
}

async Description_maxChar (text){
    await this.S_Description_minChar.fill(text)
}

async Description_placeHolder (text){
    await this.S_Description_placeHolder.fill(text);
}

async Explain_minChar(text){
  await this.S_Explain_minchar.fill(text);
}

async Explain_maxchar(text){
  await this.S_Explain_maxchar.fill(text);
}

async Explain_Filed_visible(){
  await this.S_Explain_Field1.isVisible();
}

async Explain_field_1 (text){
  await this.S_Explain_field1.fill(text);
}

async Explain_field_2 (text){
  await this.S_Explain_Field2.fill(text);
}

async Explain_field_cancel (){
  await this.S_Explain_Field_Cancel.click();
}

}
