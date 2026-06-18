import {test,expect} from '@playwright/test'

// test("single select dropdown",async({page})=>{
//     await page.goto("https://testautomationpractice.blogspot.com/")

//     const cnt=await page.locator('//select[@id="country"]/option').count()
//     console.log("count of dropdown : ",cnt)

//     const text=await page.locator('//select[@id="country"]').textContent()
//     console.log(text)

//     // await page.locator('//select[@id="country"]').selectOption("France")
//     // await page.locator('//select[@id="country"]').selectOption({value:"UK"})
//     await page.locator('//select[@id="country"]').selectOption({index:7})

//     await page.pause()
// })

// test("multi select", async({page})=>{
//    await page.goto("https://testautomationpractice.blogspot.com/")
//    await page.locator('//select[@id="colors"]').selectOption(["Red","Green","Yellow"])
//    await page.pause()
//})

test("suggestion dropdown",async({page})=>{
    await page.goto("https://www.google.com/")
    await page.locator('//textarea[@title="Search"]').fill('india')

    const locat=await page.locator('//div[@class="eIPGRd"]')
    await locat.first().waitFor()

    const text=await locat.allTextContents()

    for(let i=0;i<locat.length;i++){
        const etext=await text(i)
        if(etext=="India" && etext=="Country in South Asia"){
            await locat.nth(i).click()
        }
    }

    await page.pause()
})
