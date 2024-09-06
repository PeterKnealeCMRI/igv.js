import { expect, Locator } from "@playwright/test";
import { IGV_Navbar_GenomicLocation_ChromosomeSelect } from "./IGV_Navbar_GenomicLocation_ChromosomeSelect";

export class IGV_Navbar_GenomicLocation {
    private readonly element: Locator;
    public readonly chromosome_select: IGV_Navbar_GenomicLocation_ChromosomeSelect;

    constructor(parent: Locator) {
        this.element = parent.locator('.igv-navbar-genomic-location');
        this.chromosome_select = new IGV_Navbar_GenomicLocation_ChromosomeSelect(this.element);
    }

    public async assertVisible(): Promise<void> {
        await expect(this.element).toBeVisible();
    }

    public async assertNotVisible(): Promise<void> {
        await expect(this.element).not.toBeVisible();
    }
}

