import { test, expect } from '@playwright/test';
import { IGV_Container } from '../models/IGV_Container';
import { DEFAULT_IGV_DIV_ID } from '../constants';

let igv: IGV_Container;

test.beforeEach(async ({ page }) => {
    await page.goto('/tests/annotation/index.html');
    igv = new IGV_Container(page, DEFAULT_IGV_DIV_ID);
});

test('has correct page title', async ({ page }) => {
    expect(await page.title()).toBe('Annotation');
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


test('has correct locus search text', async ({ page }) => {
    await igv.navbar.left.genomic_location.assertVisible();
    await igv.navbar.left.genomic_location.locus_size_group.assertVisible();
    await igv.navbar.left.genomic_location.locus_size_group.assertSearchText("chr8:128,746,679-128,756,197");
});

test('has correct window size', async ({ page }) => {
    await igv.navbar.left.genomic_location.assertVisible();
    await igv.navbar.left.genomic_location.locus_size_group.assertVisible();
    await igv.navbar.left.genomic_location.locus_size_group.assertWindowSizeText("9,519 bp");
});