import {expect,test} from  '@playwright/test'

test("home page",async({page})=>{

    await page.goto('https://www.amazon.in/gp/aw/d/B0DY7GRVNS/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=f1168af21c1737b1e72ce1d277189afe&hsa_cr_id=0&qid=1772652363&sr=1-2-e0fa1fdd-d857-4087-adda-5bd576b25987&aref=MP1m76MIye&ref_=sbx_s_sparkle_sbtcd_asin_1_title&pd_rd_w=5XUAF&content-id=amzn1.sym.6dfd6df7-44a2-4792-8c83-3ac8a4ba533a%3Aamzn1.sym.6dfd6df7-44a2-4792-8c83-3ac8a4ba533a&pf_rd_p=6dfd6df7-44a2-4792-8c83-3ac8a4ba533a&pf_rd_r=J8589VQ1ZQ81S0HS3JAP&pd_rd_wg=pDNmq&pd_rd_r=64adf8b8-6495-447f-9886-a3e8270ecb32')
    await page.screenshot({path : 'C:/Users/HP/OneDrive/Desktop/CS/Playwright/screenshot.js'+Date.now()+'full page.png',fullpage: true})
})