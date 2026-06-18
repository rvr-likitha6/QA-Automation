import{test,expect} from '@playwright/test'

test("Webtable",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table=await page.locator('//table[@id="productTable"]')
    // const tablecolumn=await table.locator('thead tr th')
    // console.log("The total number of columns :"+await tablecolumn.count())
    const tablerow=await table.locator('tbody tr')
    // console.log("The total number of rows :" + await tablerow.count())
    // const tablecells=await table.locator('tbody tr td')
    // console.log("The total number of cells :" + await tablecells.count())
    // const tablerow=await page.locator('//table[@id="productTable"]/tbody/tr')
    
    const count=await tablerow.count()

    // const check = tablerow.filter({
    //    has : await page.locator('td'),
    //    hasText :/SmartWatch|Laptop/  //regular expression
    // })
    //for(let i=0;i<count;i++){
    //    await check.nth(i).locator('//input[@type="checkbox"]').check()
    // }
    for(let i=0;i<count;i++){
        let row=tablerow.nth(i)
        let cell=row.locator("td").nth(1)
        let text=await cell.textContent()

        console.log(text)
    }
     await page.pause()
})

