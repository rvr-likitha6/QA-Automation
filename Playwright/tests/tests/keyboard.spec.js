import {test,expect} from '@playwright/test'

test("keyboard action",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.fill('#name','Likhitha')
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+X')
    await page.keyboard.down('Tab')
    await page.keyboard.press('Control+V')
    await page.keyboard.press('Shift+Tab')
    await page.keyboard.insertText("Likhitha")
    await page.keyboard.down('Tab')
    await page.keyboard.down('Tab')
    await page.keyboard.insertText('965487123')
    await page.waitForTimeout(3000)
    
})