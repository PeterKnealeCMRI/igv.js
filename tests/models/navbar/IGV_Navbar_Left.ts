import { Locator, expect } from "@playwright/test";
import { IGV_Navbar_Genome } from "./IGV_Navbar_Genome";

export class IGV_Navbar_Left {
    private readonly container: Locator;
    public readonly genome: IGV_Navbar_Genome;

    constructor(parent: Locator) {
        this.container = parent.locator('.igv-navbar-left-container');
        this.genome = new IGV_Navbar_Genome(this.container);
    }

    async assertVisible() {
        await expect(this.container).toBeVisible();
    }
}



