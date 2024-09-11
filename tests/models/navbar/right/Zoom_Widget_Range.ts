import { Locator, expect } from "@playwright/test";
import exp from "constants";

export class Zoom_Widget_Range {
    private readonly range: Locator;

    constructor(parent: Locator) {
        this.range = parent.locator('input[type="range"]');
    }

    async assertVisible() {
        await expect(this.range).toBeVisible();
    }

    async assertCurrentLevel(expected: number) {
        await expect(this.range).toHaveValue(expected.toString());
    }

    async assertLowerBound(expected: number) {
        await expect(this.range).toHaveAttribute('min', expected.toString());
    }
    
    async assertUpperBound(expected: number) {
        await expect(this.range).toHaveAttribute('max', expected.toString());
    }
}
