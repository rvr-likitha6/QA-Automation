import {test, expect} from '@playwright/test'

//only | skip | fall | fixme |slow

test("demo test",async()=>{
    await expect(2).toBe(2)
})

test.fixme("demo test1",async()=>{
    await expect(2).toBe(2)
})
