import { response } from 'express';
import puppeteer from 'puppeteer';

const url = "https://www.doordash.com/";
const location = "1201 Parkmoor Ave, San Jose, CA 95126";
const puppeteerOptions = {
    headless: true,
    args: [
      '--enable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-sandbox',
      '--no-zygote',
      '--deterministic-fetch',
      '--disable-features=IsolateOrigins',
      '--disable-site-isolation-trials',
      // '--single-process',
    ],
  };

async function getPDF(url, page) {
  // Set a user agent to make it look like a human
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36');

  // Set a larger viewport size to capture the entire page
  await page.setViewport({ width: 1000, height: 3000 });

  // Navigate to the website
  await page.goto(url);

  await page.waitForNavigation();

  // Wait for the page to load completely
  await page.waitForSelector('div[data-testid="OptimizedImage"]');

  // Scroll to the bottom of the page to load all content
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight / 9);
  });

  // Generate a PDF of the entire webpage
  await page.pdf({ path: 'rest.pdf', format: 'A4', printBackground: false });
}

async function search(url, location, query) {
    const browser = await puppeteer.launch(puppeteerOptions)
    try{
        const page = await browser.newPage();
        await page.setUserAgent(
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
          'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36'
        );
        await page.goto(url);
        console.log('Current URL:', page.url());

        await page.waitForSelector('input[aria-autocomplete="list"]')
        await page.type('input[aria-autocomplete="list"]', location);

        // Click the "Find Restaurants" button
        await page.click('button[aria-label="Find Restaurants"]', { timeout: 1000 });
        await page.click('button[aria-label="Find Restaurants"]', { timeout: 1000 });
        // redundancy
        await page.click('button[aria-label="Find Restaurants"]', { timeout: 1000 });

        // Wait for navigation to complete
        await page.waitForNavigation();
        

        await page.waitForSelector('input[aria-owns="search-dropdown-results"]')
        console.log('Current URL:', page.url());
        await page.type('input[aria-owns="search-dropdown-results"]', query,  { timeout: 3000 });

        // Intercept network requests
        await page.setRequestInterception(true);

        // Listen for the network request you want to intercept
        var responseGot = false;
        page.on('request', async (interceptedRequest) => {
          if (interceptedRequest.url().includes('autocompleteFacetFeed') && !responseGot) {
              console.log(interceptedRequest.url());
              responseGot = true;
              // Get the response payload
              const response = await page.waitForResponse(interceptedRequest.url());
               if(response) {
                const payload = await response.text();
                const payloadJSON = JSON.parse(payload);
                const bodyArray = JSON.parse(payloadJSON.data.autocompleteFacetFeed.body[0].body[0].events.click.data);
                const goToURL = bodyArray.domain + bodyArray.uri; // RAHHHHHHHHHHH
                console.log(goToURL)
                await getPDF(goToURL, page)
                browser.close()
              }
          }
          else {
            if(!response) {
              interceptedRequest.continue();
            }
            else {
              await page.setRequestInterception(false);
            }
          }
        });

        //getPDF("https://www.doordash.com/store/mcdonald's-san-jose-654311/?event_type=autocomplete&pickup=false", page)
    }
    catch(error) {
        console.log(error)
        page.close()
    }
}

search(url, location, "The Giving Pies");