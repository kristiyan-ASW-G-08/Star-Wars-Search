// import puppeteer from 'puppeteer';
// describe('index', () => {
//   let page;
//   let testData;
//   beforeAll(async () => {
//     jest.setTimeout(30000);
//     const browser = await puppeteer.launch({
//       headless: false,
//       slowMo: 100,
//       args: ['--windows-size=1920,1080']
//     });
//     testData = {
//       results: [
//         {
//           name: 'Death Star',
//           hyperdrive_ration: '4',
//           length: '120000'
//         }
//       ]
//     };
//     page = await browser.newPage();
//     await page.goto('http://localhost:1234/');
//     await page.setRequestInterception(true);
//     await page.on('request', request => {
//       request.respond({
//         content: 'application/json',
//         headers: { 'Access-Control-Allow-Origin': '*' },
//         body: JSON.stringify(testData)
//       });
//     });
//   });
//   afterAll(() => {
//     t;
//     browser.close();
//   });
//   it('should have title "Star Wars Search"', async () => {
//     const title = await page.title();
//     expect(title).toMatch('Star Wars Search');
//   });
//   describe('searching for device', () => {
//     let card;
//     beforeAll(async () => {
//       await page.waitForSelector('.search-form');
//       await page.type('input[name=name]', 'death star');
//       await page.select('select[name=option]', 'starships');
//       await page.$eval('.search-btn', btn => btn.click());
//       card = await page.waitForSelector('.card');
//     });
//     it('element with class card should exist', () => {
//       expect(card).toBeTruthy();
//     });
//     describe('switching sides', () => {
//       beforeAll(async () => {
//         await page.$eval('.switch-sides-btn', btn => btn.click());
//       });
//       it('swirchSideBtb should have "Join the Light Side!" text content', async () => {
//         const switchSidesBtnTextContent = await page.$eval(
//           '.switch-sides-btn',
//           element => element.textContent
//         );
//         expect(switchSidesBtnTextContent).toMatch('Join the Light Side!');
//       });
//       it('searchBtn inner html should match <i class="fab fa-galactic-republic"></i>', async () => {
//         const searchBtnInnerHTML = await page.$eval(
//           '.search-btn',
//           element => element.innerHTML
//         );
//         expect(searchBtnInnerHTML).toMatch(
//           '<i class="fab fa-galactic-republic"></i>'
//         );
//       });
//     });
//   });
// });
