import { expect, Locator, Page } from '@playwright/test';
import { IGV_Navbar } from './navbar/IGV_Navbar';
import exp from 'constants';

export class IGV_Container {
  private readonly container: Locator;
  private readonly tracks: Locator;
  public readonly navbar: IGV_Navbar;

  constructor(page: Page, selector: string) {
    this.container = page.locator(selector).locator('.igv-container');
    this.tracks = this.container.locator('.igv-track-label');
    this.navbar = new IGV_Navbar(this.container);
  }

  async assertVisible() {
    await expect(this.container).toBeVisible();
  }
  
  async assertTrackLabels(expected: Array<string>): Promise<void> {
    await expect.poll(async () => {
      return await this.tracks.allInnerTexts()
    }, {
      message: 'Waiting for track labels',
      timeout: 30000,
    }).toMatchObject(expected);
  }

  async assertTrackLabelPresent(expected: string): Promise<void> {
    await expect.poll(async () => {
      return await this.tracks.allInnerTexts()
    }, {
      message: 'Waiting for track labels',
      timeout: 30000,
    }).toContain(expected);
  }

  async assertTrackCount(expected: number): Promise<void> {
    await expect.poll(async () => {
      return await this.tracks.count()
    }, {
      message: 'Waiting for track count',
      timeout: 30000,
    }).toBe(expected);
  }
}
