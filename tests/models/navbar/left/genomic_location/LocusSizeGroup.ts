import { Page, Locator, expect } from "@playwright/test";
import exp from "constants";

export class LocusSizeGroup {
    private container: Locator;
    private searchInput: Locator;
    private searchIcon: Locator;
    private windowSizePanel: Locator;

    constructor(parent: Locator) {
        this.container = parent.locator('.igv-locus-size-group');
        this.searchInput = parent.locator('.igv-search-input');
        this.searchIcon = parent.locator('.igv-search-icon-container svg');
        this.windowSizePanel = parent.locator('.igv-windowsize-panel-container');
    }

    async enterSearchText(text: string): Promise<void> {
        await this.searchInput.fill(text);
    }

    async assertSearchText(expected: string): Promise<void> {
        await expect.poll(async () => {
            return await this.searchInput.inputValue();
        }, {
            message: 'Waiting for search text to settle to expected value',
            timeout: 30000,
        }).toBe(expected);
    }

    async clickSearchIcon(): Promise<void> {
        await this.searchIcon.click();
    }

    async assertVisible() {
        await expect(this.container).toBeVisible();
    }

    async assertWindowSizeText(expected: string): Promise<void> {
        await expect.poll(async () => {
            return await this.windowSizePanel.innerText();
        }, {
            message: 'Waiting for window size panel to settle to expected value',
            timeout: 30000,
        }).toBe(expected);
    }
}
