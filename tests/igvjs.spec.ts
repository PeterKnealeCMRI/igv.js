import { test, expect } from '@playwright/test';
import { IGV_Container } from './models/igv_container';

let igv: IGV_Container;

test.beforeEach(async ({ page }) => {
  await page.goto('/dev/igvjs.html');
  igv = new IGV_Container(page, "#myDiv");
});

test('has correct page title', async ({ page }) => {
  expect(await page.title()).toContain('IGV Examples');
});

test('has visible navbar', async ({ page }) => {
  await igv.assertVisible();
  await igv.navbar.assertVisible();
  await igv.navbar.left.assertVisible();
  await igv.navbar.right.assertVisible();
  await igv.navbar.right.zoomWidget.assertVisible();
  await igv.navbar.right.zoomWidget.range.assertVisible();
});

test('has no visible genome', async ({ page }) => {
  await igv.navbar.left.current_genome.assertNotVisible();
});

test('has zoom level 23 with a range of 0..23', async ({ page }) => {
  var current = await igv.navbar.right.zoomWidget.range.GetCurrentLevel();
  var lower = await igv.navbar.right.zoomWidget.range.GetLowerBound();
  var upper = await igv.navbar.right.zoomWidget.range.GetUpperBound();

  expect(current).toBe(23);
  expect(lower).toBe(0);
  expect(upper).toBe(23);
});

