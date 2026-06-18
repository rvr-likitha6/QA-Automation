import {test,expect} from '@playwright/test'

// test("simple alert",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     page.on('dialog',async dialog=>{
//         console.log(dialog.type())
//         console.log(dialog.message())
//         expect (dialog.message("I am an alert box!"))
//         await dialog.accept()
//     })
//     // await page.locator('//button[@id="alertBtn"]').click()
//     await page.click('//button[@id="alertBtn"]')
// })


// test("confirmation alert",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     page.on('dialog',async dialog=>{
//         console.log(dialog.type())
//         await dialog.dismiss()
//     })
    
//     await page.click('//button[@id="confirmBtn"]')
//     await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")

//     await page.pause()
// }) 

test("prompt alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', async dialog=>{
        console.log(dialog.message())
        await dialog.accept("Likhitha")
    })
    await page.click('//button[@id="promptBtn"]')
    // await page.clicl('#promptBtn)
    await expect(page.locator('#demo')).toHaveText('Hello Likhitha! How are you today?')

    await page.pause()
})