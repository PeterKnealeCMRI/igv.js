import { test, expect } from '@playwright/test';
import { IGV_Container } from '../models/igv_container';

let igv: IGV_Container;

test.beforeEach(async ({ page }) => {
    await page.goto('/dev/annotation/annotation.html');
    igv = new IGV_Container(page, "#igvDiv");
});

test('has correct page title', async ({ page }) => {
    const title = await page.locator('h1').innerText();
    expect(title).toBe('Annotation tracks');
});

test('has correct genome', async ({ page }) => {
    await igv.navbar.left.current_genome.assertVisible();
    await igv.navbar.left.current_genome.assertText("hg19");
    await igv.navbar.left.current_genome.assertTitle("hg19\nHuman (GRCh37/hg19)");
});

test('has correct genomic location', async ({ page }) => {
    await igv.navbar.left.genomic_location.assertVisible();
    await igv.navbar.left.genomic_location.chromosome_select.assertSelectVisible();
    await igv.navbar.left.genomic_location.chromosome_select.assertSelectedOption("chr8");
});