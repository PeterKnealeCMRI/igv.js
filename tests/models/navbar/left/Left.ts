import { Locator, expect } from "@playwright/test";
import { CurrentGenome } from "./CurrentGenome";
import { GenomicLocation } from "./genomic_location/GenomicLocation";


export class Left {
    private readonly container: Locator;
    public readonly current_genome: CurrentGenome;
    public readonly genomic_location: GenomicLocation;

    constructor(parent: Locator) {
        this.container = parent.locator('.igv-navbar-left-container');
        this.current_genome = new CurrentGenome(this.container);
        this.genomic_location = new GenomicLocation(this.container);
    }

    async assertVisible() {
        await expect(this.container).toBeVisible();
    }
}
