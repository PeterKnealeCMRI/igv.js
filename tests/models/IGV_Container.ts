import { expect, Locator, Page } from '@playwright/test';
import { IGV_Navbar } from './navbar/IGV_Navbar';
import { IGV_Tracks } from './navbar/IGV_Tracks';

export class IGV_Container {
  private readonly container: Locator;
  public readonly tracks: IGV_Tracks;
  public readonly navbar: IGV_Navbar;

  constructor(page: Page, selector: string) {
    this.container = page.locator(selector).locator('.igv-container');
    this.tracks = new IGV_Tracks(this.container);
    this.navbar = new IGV_Navbar(this.container);
  }

  async assertVisible() {
    await expect(this.container).toBeVisible();
  }
}
