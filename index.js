const axios=require('axios');
const cheerio = require('cheerio');
const fs= require('fs');


axios.get('https://www.amazon.in/Stone-650-Wireless-Bluetooth-Speaker/dp/B07NBZQT5T/ref=sr_1_1_sspa?crid=3FCMYI2W40N0T&keywords=speakers+bluetooth+wireless&qid=1662647960&sprefix=spea%2Caps%2C230&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExMDdZSFpZTFJJTExXJmVuY3J5cHRlZElkPUEwMjcyNjMzMzdDNDQ2WloyME5HRSZlbmNyeXB0ZWRBZElkPUEwOTc2MDQwMjU2UUZSOFBBSkY5QSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=')
    .then((res) =>{
        const $ = res.data;
        fs.appendFile('index.html', $, appendFileCallback);
    });
    function appendFileCallback(error){
        if(error){
            console.log('error in appending.');
            console.log(error.message);
        } else{
            console.log('Success.');
        }
    }