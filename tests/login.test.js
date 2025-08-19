const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const LoginPage = require('../pages/loginPage');

test('Successful login with password visibility', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    
    // Test data
    const credentials = {
        email: 'shrikrishna.pandey1@gmail.com',
        password: '#Playwright@25'
    };

    // Test steps
    await homePage.navigateTo('https://demo.prestashop.com/#/en/front');
    await homePage.goToLoginPage();
    await loginPage.login(credentials.email, credentials.password);
    
    // Verification
    const frame = await homePage.getFrame();
    await expect(frame.getByText('Your account')).toBeVisible();
});