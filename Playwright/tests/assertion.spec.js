import {test,expect} from '@playwright/test'

test("BuildIn Assertion" , async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await expect (page).toHaveTitle("Automation Testing Practice")
await expect (page.locator('//h1[@class="title"]')).toBeVisible()
await expect (page.locator('//span[text()="For Selenium, Cypress & Playwright"]')).toHaveText("For Selenium, Cypress & Playwright")
await expect (page.locator("//span[contains(text(),'Playwright')]")).toContainText("Playwright")
await expect (page.locator("//input[@id='name']")).toBeEnabled()
await expect (page.locator("//input[@id='name']")).toBeEmpty()
await expect (page.locator("//input[@id='name']")).toBeEditable()
await  page.locator("//input[@id='name']").fill("Playwright")
await expect (page.locator("//input[@id='name']")).toHaveValue("Playwright")
//await expect (page.locator("//input[@id='name']")).toBeEmpty() // it will get failed here
await page.pause()
})