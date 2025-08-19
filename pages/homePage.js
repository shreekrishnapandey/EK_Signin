const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
    }

    async goToLoginPage() {
        const frame = await this.getFrame();
        await frame.getByRole('link', { name: ' Sign in' }).click();
        await this.page.waitForLoadState('networkidle');
    }
}

module.exports = HomePage;