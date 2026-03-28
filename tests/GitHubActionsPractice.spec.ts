import {expect, test} from "@playwright/test"

test("Practice git 1", async({page})=>{
  console.log("Start of practice 1")
  await page.goto("https://www.saucedemo.com/")
  expect(page).toHaveTitle("Swag Labs")
  console.log("End of practice 1")
})

test("Practice git 2", async({page})=>{
  console.log("Start of practice 2")
  await page.goto("https://www.saucedemo.com/")
  expect(page).toHaveTitle("Swag Labs")
  console.log("End of practice 2")
})

test("Practice git 3", async({page})=>{
  console.log("Start of practice 3")
  await page.goto("https://www.saucedemo.com/")
  expect(page).toHaveTitle("Swag Labsss")
  console.log("End of practice 3")
})

test.describe("Practice 4", async()=>{
test("Practice git 5", async({page})=>{
  console.log("Start of practice 5")
  await page.goto("https://www.saucedemo.com/")
  expect(page).toHaveTitle("Swag Labs")
  console.log("End of practice 5")
})

test("Practice git 6", async({page})=>{
  console.log("Start of practice 6")
  await page.goto("https://www.saucedemo.com/")
  expect(page).toHaveTitle("Swag Labsss")
  console.log("End of practice 6")
})

})