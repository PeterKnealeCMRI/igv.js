import { Locator, expect } from "@playwright/test";


export class IGV_Navbar_CurrentGenome {
    private readonly element: Locator;

    constructor(parent: Locator) {
        this.element = parent.locator('.igv-current-genome');
    }

    public async assertVisible(): Promise<void> {
        await expect(this.element).toBeVisible();
    }

    public async assertNotVisible(): Promise<void> {
        await expect(this.element).not.toBeVisible();
    }

    public async assertText(expected: string): Promise<void> {
        await expect(this.element).toHaveText(expected);
    }

    public async assertTitle(expected: string): Promise<void> {
        await expect(this.element).toHaveAttribute('title', expected);
    }
}
