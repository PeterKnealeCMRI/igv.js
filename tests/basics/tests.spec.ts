import { test, expect } from '@playwright/test';
import { IGV_Container } from '../models/IGV_Container';
import { DEFAULT_IGV_DIV_ID } from '../constants';

let igv: IGV_Container;

test.beforeEach(async ({ page }) => {
  await page.goto('/tests/basics/index');
  igv = new IGV_Container(page, DEFAULT_IGV_DIV_ID);
});

test('has correct page title', async ({ page }) => {
  expect(await page.title()).toBe('Basics');
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
  await igv.navbar.right.zoomWidget.range.assertCurrentLevel(23);
  await igv.navbar.right.zoomWidget.range.assertLowerBound(0);
  await igv.navbar.right.zoomWidget.range.assertUpperBound(23);
});

