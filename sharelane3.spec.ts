import { Builder, By, WebDriver } from 'selenium-webdriver';
import { assert } from 'chai';

describe('Positive Login Test', function () {
    let driver: WebDriver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should log in successfully with valid credentials', async function () {
        await driver.get('https://sharelane.com/cgi-bin/main.py');
        await driver.findElement(By.css('input[value="Login"]')).click();
        await driver.findElement(By.name('email')).sendKeys('test@example.com');
        await driver.findElement(By.name('password')).sendKeys('password123');
        await driver.findElement(By.css('input[value="Continue"]')).click();
        const confirmationMessage = await driver.findElement(By.css('.confirmation_message')).getText();
        assert.include(confirmationMessage, 'Welcome back!');
    });
});

