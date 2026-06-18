import {test,expect} from '@playwright/test'

test('hover',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.hover('//button[text()="Point Me"]')
    await page.waitForTimeout(3000)
})
test('dblclick',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.dblclick('//button[text()="Copy Text"]')
    await page.waitForTimeout(3000)
})
test.only('wheel',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    //await page.mouse.wheel(0,1000)
    await page.locator('//a[text()="Youtube"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
})
test.only('drag and drop',async({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    const drag = await page.locator('//div[@id="draggable"]')
    const drop = await page.locator('//div[@id="droppable"]')

    await drag.dragTo(drop)
    await page.waitForTimeout(3000)

})
