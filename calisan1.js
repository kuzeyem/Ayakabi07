const puppeteer = require('puppeteer');
const puppeteerExtra = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteerExtra.use(StealthPlugin());

ayakkabi = 'Air More Uptempo';

async function giris(){
    

} 


function generateShoeURL(shoeName, itemCode) {
    const processedName = shoeName.replace(/ /g, '-').replace(/'/g, '').replace(/&/g, '');
    const lowercaseName = processedName.toLowerCase();

    // Remove consecutive hyphens and convert item code to lowercase
    const cleanName = lowercaseName.replace(/-+/g, '-');
    const lowercaseItemCode = itemCode.toLowerCase();
    
    const queryString = `${cleanName}-${lowercaseItemCode}?sneaker-beden=45`;
    return `https://wunder.com.tr/${queryString}`;
}

const shoeName = "GEL-Kayano 14 'White & Pure Gold'";
const itemCode = "1201A019-102";
const url = generateShoeURL(shoeName, itemCode);
console.log(url);


/*
Wunder Ayakkabı botu

Çalıştırmak için bi hesap açıp konumunuzu kaydedin
Hesap bilgilerinizi kaydettiğiniz koduma ekleyin
Ayakkabı ismini ve ürün kodunu girmeyi unutmayın
En alt kısımda kredi kartı kısmına bilgilerinizi ekleyin
zaten hesabınıza kayıtlıysa kredi kartı bilgi kısmını sileilirsiniz

Çalıştırmadan önce node.js yükleyin ve

npm install node
npm install pupeteer
npm install puppeteer-extra
npm install spuppeteer-extra-plugin-stealth

kodu node.calisan1.js yazarak çalıştırabilirsiniz
Kod hakkında sorunuz olursa soru sorabilirsiniz çeekinmeyin

İyi kazançlar
*/

const website = async () => {
    const browser = await puppeteer.launch({
      headless: false, // Run in non-headless mode
      slowMo: 5
    });
    
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'
    );
  
    // Adjust the desired viewport dimensions
    await page.setViewport({ width: 1200, height: 800 });

    await page.goto('https://wunder.com.tr/account/login');

  // Fill in login details
    await page.waitForSelector('input[type="email"]');
    await page.type('input[type="email"]', '');//doldur  

    await page.waitForSelector('input[type="password"]');
    await page.type('input[type="password"]', '');//doldur

    await page.waitForSelector('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.waitForNavigation(); // Wait for the login to complete
    

  // Search for the shoe by name
    await page.goto(url);
    




    await page.waitForSelector('button[title="46"]');
    await page.click('button[title="46"]');

    await page.waitForSelector('button.add-to-cart');
    await page.click('button.add-to-cart');

    await page.waitForSelector('li.relative.flex.basket-bag.items-center.order-1.sm\\:order-2.md\\:order-2.lg\\:order-2');
    await page.click('li.relative.flex.basket-bag.items-center.order-1.sm\\:order-2.md\\:order-2.lg\\:order-2');


    await page.waitForTimeout(2000); 

    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await page.waitForSelector('div.style-module_RejectButton__3SwP8 svg');
    await page.click('div.style-module_RejectButton__3SwP8 svg');

    await page.waitForSelector('button[class*="style-module_Button__6nJbC"]');
    await page.click('button[class*="style-module_Button__6nJbC"]');

    await page.waitForTimeout(1000); 
    await page.waitForSelector('button[class*="style-module_Button__6nJbC"]');
    await page.click('button[class*="style-module_Button__6nJbC"]');

    await page.waitForSelector('input[name="cardnumber"]');
    await page.type('input[name="cardnumber"]', 'Kart-Numarası');//doldur

    await page.waitForSelector('input[name="ccname"]');
    await page.type('input[name="ccname"]', 'İsim');//doldur

    await page.waitForSelector('input[name="cc-exp"]');
    await page.type('input[name="cc-exp"]', '');//doldur

    await page.waitForSelector('input[name="cvc"]');
    await page.type('input[name="cvc"]', '');//doldur


    await page.waitForSelector('.style-module_Button__6nJbC');
    await page.click('.style-module_CheckboxBorder__kolgJ');
    await page.keyboard.press('Tab');


    await page.waitForSelector('input[name="masterPassCardName"]');
    await page.type('input[name="masterPassCardName"]', 'Kart');
    await page.waitForTimeout(100); 
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100); 
    await page.keyboard.press('Enter');
    await page.waitForTimeout(100); 
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100); 
    await page.keyboard.press('Enter');
    await page.waitForTimeout(100); 






    await page.waitForTimeout(1000); // Wait for 1 second

   

    
    await page.mouse.click(120, 450); // 66 420
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');




    
}

website();
