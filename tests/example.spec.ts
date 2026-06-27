import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads and shows the name', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Sérgio Laranjeira')).toBeVisible();
  });

  test('shows current role', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Doctolib')).toBeVisible();
  });

  test('LinkedIn link points to correct profile', async ({ page }) => {
    await page.goto('/');
    const link = page.getByRole('link', { name: /linkedin/i });
    await expect(link).toHaveAttribute('href', /linkedin\.com\/in\/sergiolaranjeira/);
  });

  test('has valid meta title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Sérgio Laranjeira/);
  });

  test('cover image loads', async ({ page }) => {
    await page.goto('/');
    const img = page.locator('img[alt*="Sérgio"]');
    await expect(img).toBeVisible();
  });
});
