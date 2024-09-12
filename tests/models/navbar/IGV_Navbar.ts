import { expect, Locator } from "@playwright/test";
import { Left } from "./left/Left";
import { Right } from "./right/Right";

export class IGV_Navbar {
    private readonly container: Locator;
    public readonly left: Left;
    public readonly right: Right;

    constructor(parent: Locator) {
        this.container = parent.locator('.igv-navbar');
        this.left = new Left(this.container);
        this.right = new Right(this.container);
    }

    async assertVisible() {
        await expect(this.container).toBeVisible();
    }
}


