import {test,expect} from '@playwright/test'

test("try to visit facebook",async({page})=>{

    await page.goto("https://www.facebook.com/")
})

