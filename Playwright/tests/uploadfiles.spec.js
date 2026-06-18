import {test,expect} from '@playwright/test'

test("single upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/HP/Downloads/Playwright/playwright.txt")

    await page.locator("//button[text()='Upload Single File']").click()

    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: playwright.txt")

    await page.pause()

})

test.only("multiple upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["C:/Users/HP/Downloads/Software Testing.docx","C:/Users/HP/Downloads/Playwright/playwright.txt"])

    await page.locator("//button[text()='Upload Multiple Files']").click()
    await page.pause()

}) 