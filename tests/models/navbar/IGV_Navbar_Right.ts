import { Locator, expect } from "@playwright/test";
import { IGV_Navbar_Zoom_Widget } from "./IGV_Navbar_Zoom_Widget";

export class IGV_Navbar_Right {
    private readonly container: Locator;
    public readonly zoomWidget: IGV_Navbar_Zoom_Widget;

    constructor(parent: Locator) {
        this.container = parent.locator('.igv-navbar-right-container');
        this.zoomWidget = new IGV_Navbar_Zoom_Widget(this.container);
    }

    async assertVisible() {
        await expect(this.container).toBeVisible();
    }
}
