import { Locator, expect } from "@playwright/test";

export class ChromosomeSelect {
    private readonly select: Locator;
    private readonly container: Locator;

    constructor(parent: Locator) {
        this.container = parent.locator(".igv-chromosome-select-widget-container");
        this.select = this.container.getByRole('combobox');
    }

    public async assertContainerVisible(): Promise<void> {
        await expect(this.container).toBeVisible();
    }

    public async assertSelectVisible(): Promise<void> {
        await expect(this.select).toBeVisible();
    }

    public async assertSelectedOption(expected: string) {
        await expect.poll(async () => {
            return await this.select.locator('option:checked').innerText();
        }, {
            message: 'Waiting for selected chromosome option to settle to expected value',
            timeout: 30000,
        }).toBe(expected);
    }

}
