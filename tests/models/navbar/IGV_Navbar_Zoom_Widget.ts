import { Locator, expect } from "@playwright/test";
import { IGV_Navbar_Zoom_Widget_Range } from "./IGV_Navbar_Zoom_Widget_Range";


export class IGV_Navbar_Zoom_Widget {
    private readonly container: Locator;
    public readonly range: IGV_Navbar_Zoom_Widget_Range;
    private readonly zoomIn: Locator;
    private readonly zoomOut: Locator;

    constructor(parent: Locator) {
        this.container = parent.locator('.igv-zoom-widget');
        this.zoomIn = this.container.locator('.igv-zoom-in-button');
        this.zoomOut = this.container.locator('.igv-zoom-out-button');
        this.range = new IGV_Navbar_Zoom_Widget_Range(this.container);
    }

    public async clickZoomIn() : Promise<void> {
        await this.zoomIn.click();
    }
    
    public async clickZoomOut() : Promise<void> {
        await this.zoomOut.click();
    }
    
    async assertVisible() {
        await expect(this.container).toBeVisible();
    }
}


