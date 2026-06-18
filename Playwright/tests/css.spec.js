import {test, expect} from '@playwright/test'

test("Login using orangehrm",async({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator('//input[@name="username"]').fill("Admin")
  //await page.locator('//input[@name="password"]').fill("admin123")
  await page.fill("locator","value")
  await page.locator('//button[text()=" Login "]').click()

  await page.waitForTimeout(3000)
})