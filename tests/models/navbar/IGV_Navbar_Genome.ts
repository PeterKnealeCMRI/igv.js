import { Locator, expect } from "@playwright/test";



export class IGV_Navbar_Genome {
    private readonly container: Locator;

    constructor(parent: Locator) {
        this.container = parent.locator('.igv-current-genome');
    }

    public async assertVisible(): Promise<void> {
        await expect(this.container).toBeVisible();
    }

    public async assertNotVisible(): Promise<void> {
        await expect(this.container).not.toBeVisible();
    }

    public async assertText(expected: string): Promise<void> {
        await expect(this.container).toHaveText(expected);
    }

    public async assertTitle(expected: string): Promise<void> {
        await expect(this.container).toHaveAttribute('title', expected);
    }
}
