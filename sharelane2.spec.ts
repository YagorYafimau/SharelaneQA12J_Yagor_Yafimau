const { Builder, By } = require('selenium-webdriver');
const assert = require('chai').assert;

describe('Negative Registration Test', function () {
    let driver: any;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    it('should show error on registration with invalid data', async function () {
        await driver.get('https://sharelane.com/cgi-bin/main.py');
        await driver.findElement(By.css('a[href="./register.py"]')).click();
        await driver.findElement(By.name('email')).sendKeys('invalid-email');
        await driver.findElement(By.name('password')).sendKeys('');
        await driver.findElement(By.name('zip_code')).sendKeys('12345');
        await driver.findElement(By.css('input[value="Continue"]')).click();
        const errorMessage = await driver.findElement(By.css('.error_message')).getText();
        assert.include(errorMessage, 'Please enter a valid email');
    });
});
