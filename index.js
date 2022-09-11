const request = require('promise-request');
const cheerio = require('cheerio');
const json2csv= require("json2csv").Parser;
const fs = require('fs');


const getProducturl = 'https://www.amazon.in/boAt-Stone-180-Bluetooth-Speaker/dp/B08JMFH2PZ/ref=sr_1_2_sspa?keywords=speakers%2Bbluetooth%2Bwireless&qid=1662912797&sprefix=spea%2Caps%2C476&sr=8-2-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNjFTQkdCSDg4MFNIJmVuY3J5cHRlZElkPUEwNTY1MDc4MkNOODlCU0pDSzlMTSZlbmNyeXB0ZWRBZElkPUEwNzAzMjIwM0JLQzVaMFMxWVZSUCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1';


(async () => {
    let Product = [];
    const res = await request({
        uri: getProducturl,
        Headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",

            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
        },
        gzip: true,
    });
    let $ = cheerio.load(res)
    let img_title = $('h1[class="a-size-large a-spacing-none"] > span').innerText
    let price = $('span[class="a-price-whole"]').innerText
    let About = $('h1[class="a-size-base-plus a-text-bold"]').innerText

    Product.push({
        img_title, price, About
    });
    const j2cp= new json2csv();
    const h=j2cp.parse(Product);
    fs.writeFileSync("index.csv", h, "utf-8");
    
}
)();





