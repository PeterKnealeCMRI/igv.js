import { Locator, expect } from "@playwright/test";


export class IGV_Tracks {
    private readonly tracks: Locator;

    constructor(parent: Locator) {
        this.tracks = parent.locator('.igv-track-label');
    }

    async assertTrackLabels(expected: Array<string>): Promise<void> {
        await expect.poll(async () => {
            return await this.tracks.allInnerTexts();
        }, {
            message: 'Waiting for track labels',
            timeout: 30000,
        }).toMatchObject(expected);
    }

    async assertTrackLabelPresent(expected: string): Promise<void> {
        await expect.poll(async () => {
            return await this.tracks.allInnerTexts();
        }, {
            message: 'Waiting for track labels',
            timeout: 30000,
        }).toContain(expected);
    }

    async assertTrackCount(expected: number): Promise<void> {
        await expect.poll(async () => {
            return await this.tracks.count();
        }, {
            message: 'Waiting for track count',
            timeout: 30000,
        }).toBe(expected);
    }
}
