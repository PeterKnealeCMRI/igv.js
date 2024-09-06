import { Locator, expect } from "@playwright/test";
import { ChromosomeSelect } from "./ChromosomeSelect";
import { LocusSizeGroup } from "./LocusSizeGroup";

export class GenomicLocation {
    private readonly element: Locator;
    public readonly chromosome_select: ChromosomeSelect;
    public readonly locus_size_group: LocusSizeGroup;

    constructor(parent: Locator) {
        this.element = parent.locator('.igv-navbar-genomic-location');
        this.chromosome_select = new ChromosomeSelect(this.element);
        this.locus_size_group = new LocusSizeGroup(this.element);
    }

    public async assertVisible(): Promise<void> {
        await expect(this.element).toBeVisible();
    }

    public async assertNotVisible(): Promise<void> {
        await expect(this.element).not.toBeVisible();
    }
}
