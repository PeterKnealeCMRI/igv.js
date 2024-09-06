import { Locator, expect } from "@playwright/test";
import { IGV_Navbar_CurrentGenome } from "./IGV_Navbar_CurrentGenome";
import { IGV_Navbar_GenomicLocation } from "./IGV_Navbar_GenomicLocation";

export class IGV_Navbar_Left {
    private readonly container: Locator;
    public readonly current_genome: IGV_Navbar_CurrentGenome;
    public readonly genomic_location: IGV_Navbar_GenomicLocation;

    constructor(parent: Locator) {
        this.container = parent.locator('.igv-navbar-left-container');
        this.current_genome = new IGV_Navbar_CurrentGenome(this.container);
        this.genomic_location = new IGV_Navbar_GenomicLocation(this.container)
    }

    async assertVisible() {
        await expect(this.container).toBeVisible();
    }
}