import { Locator, expect } from "@playwright/test";

export class Zoom_Widget_Range {
    private readonly range: Locator;

    constructor(parent: Locator) {
        this.range = parent.locator('input[type="range"]');
    }

    async assertVisible() {
        await expect(this.range).toBeVisible();
    }

    async GetCurrentLevel(): Promise<number> {
        const value = await this.range.inputValue();
        return parseInt(value);
    }

    async GetLowerBound(): Promise<number> {
        const min = await this.range.getAttribute('min');
        if (min == null) {
            throw new Error("min attribute not found");
        }
        return parseInt(min);
    }

    async GetUpperBound(): Promise<number> {
        const max = await this.range.getAttribute('max');
        if (max == null) {
            throw new Error("max attribute not found");
        }
        return parseInt(max);
    }
}
