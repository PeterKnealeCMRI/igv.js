import { expect, Locator } from "@playwright/test";
import { IGV_Navbar_Left } from "./IGV_Navbar_Left";
import { IGV_Navbar_Right } from "./IGV_Navbar_Right";

export class IGV_Navbar {
    private readonly container: Locator;
    public readonly left: IGV_Navbar_Left;
    public readonly right: IGV_Navbar_Right;

    constructor(parent: Locator) {
        this.container = parent.locator('.igv-navbar');
        this.left = new IGV_Navbar_Left(this.container);
        this.right = new IGV_Navbar_Right(this.container);
    }

    async assertVisible() {
        await expect(this.container).toBeVisible();
    }
}
