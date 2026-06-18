import {test,expect} from '@playwright/test'
import {url} from 'inspector'

test("i-frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    // const frame=await page.frames()
    // console.log("Frame count :", frame.length)
    // for(let URL of frame){
    //     console.log("URL :",URL>url())
    // }
    const frame=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame.locator('//input[@name="mytext1"]').fill("Playwright")
    await page.pause()
})

// frame   (name | url)
// framelocator (locator)
// const frame=await page.frame("iframe-name")
// const frame=await page.frame({name:"iframe-name"})
// const frame=await page.framelocator('//iframe[@id="courses-iframe"]')

test.only('child frame',async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")

    const frame=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})

    await frame.locator('//input[@name="mytext3"]').fill("playwright")

    let child=await frame.childFrames()

    await child[0].locator('(//div[@class="AB7Lab Id5V1"])[2]').check()
    
    await page.pause()
})