import {test,expect} from '@playwright/test'

test.describe("group1",async()=>{
    test("test1",async()=>{
        console.log("test 1 started sucessfully")
    })
    test("test2",async()=>{
        console.log("test 2 started sucessfully")
    })
    test("test3",async()=>{
        console.log("test 3 started sucessfully")
    })
})

test.describe("group2",async()=>{
    test("test4",async()=>{
        console.log("test 4 started sucessfully")
    })
    test("test5",async()=>{
        console.log("test 5 started sucessfully")
    })
})