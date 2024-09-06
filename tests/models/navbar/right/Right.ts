import { Locator, expect } from "@playwright/test";
import { Zoom_Widget } from "./Zoom_Widget";

export class Right {
    private readonly container: Locator;
    public readonly zoomWidget: Zoom_Widget;

    constructor(parent: Locator) {
        this.container = parent.locator('.igv-navbar-right-container');
        this.zoomWidget = new Zoom_Widget(this.container);
    }

    async assertVisible() {
        await expect(this.container).toBeVisible();
    }
}
