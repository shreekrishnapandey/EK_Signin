const BasePage = require('./basePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async enterEmail(email) {
        const frame = await this.getFrame();
        await frame.getByRole('textbox', { name: 'Email' }).fill(email);
    }

    async enterPassword(password) {
        const frame = await this.getFrame();
        await frame.getByRole('textbox', { name: 'Password input' }).fill(password);
    }

    async clickShowPassword() {
        const frame = await this.getFrame();
        await frame.getByRole('button', { name: 'Show' }).click();
    }

    async clickSignIn() {
        const frame = await this.getFrame();
        await frame.getByRole('button', { name: 'Sign in' }).click();
        await this.page.waitForLoadState('networkidle');
    }

    async login(email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickShowPassword();
        await this.clickSignIn();
    }
}

module.exports = LoginPage;