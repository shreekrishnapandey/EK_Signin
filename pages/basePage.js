class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigateTo(url) {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
    }

    async getFrame() {
        // Wait for frame to be available
        await this.page.waitForSelector('iframe[name="framelive"]');
        return this.page.frameLocator('iframe[name="framelive"]');
    }
}

module.exports = BasePage;