import { describe } from "mocha";
import { Browser, Builder, By, Key, until, WebDriver } from "selenium-webdriver"

describe('Test Suite Name', async () => {
 it('Google search test', async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build()
  try {
      await driver.get('https://www.google.com/ncr')
      await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN)
      await driver.wait(until.titleIs('webdriver - Google Search'), 5000)
  } finally {
    await driver.quit()
  }
})
});