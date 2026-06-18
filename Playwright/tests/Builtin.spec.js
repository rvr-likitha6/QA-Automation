import { test, expect } from '@playwright/test'

test("Login using built-in locators", async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Wait for login form to load instead of logo
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible()

    // Fill credentials
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin123')

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click()

    // Verify Dashboard page
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
});
