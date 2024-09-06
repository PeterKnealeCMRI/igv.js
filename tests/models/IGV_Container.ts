import { expect, Locator, Page } from '@playwright/test';
import { IGV_Navbar } from './navbar/IGV_Navbar';

export class IGV_Container {
  private readonly container: Locator;
  public readonly navbar: IGV_Navbar;

  constructor(page: Page, selector: string) {
    this.container = page.locator(selector).locator('.igv-container');
    this.navbar = new IGV_Navbar(this.container);
  }

  async assertVisible() {
    await expect(this.container).toBeVisible();
  }

}
