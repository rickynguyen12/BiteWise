import puppeteer from 'puppeteer';
import express from 'express'; 
// Location just to use for testing
const TestLocation = "1201 Parkmoor Ave, San Jose, CA 95126";
// Function to fetch and extract text
// Location in form of: "# Street, City, State(abr) zip"
export async function fetchAndExtractText(location) {
    const { latitude, longitude } = location;
    const url = 'https://www.menufy.com/';
    var fetchURL = 'https://api.geoapify.com/v1/geocode/reverse?lat=LATI&lon=LONG&apiKey=cc19d4dc23be48d7af0bb9db85345f17'
    fetchURL = fetchURL.replace('LATI', latitude)
    fetchURL = fetchURL.replace('LONG', longitude)
    console.log(fetchURL)
    var location = "";
    var requestOptions = {
        method: 'GET',
    };
    fetch(fetchURL, requestOptions)
    .then(response => response.json())
    .then(data => {
        // Extracting relevant data from JSON
        const { housenumber, street, city, postcode, state, country } = data.features[0].properties;

        // Constructing the formatted address string
        location = `${housenumber}, ${street}, ${city}, ${state}, ${postcode}`;

        console.log(location); // Output the formatted address
    })
    .catch(error => console.log('error', error));
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        console.log('Current URL:', page.url());
        
        // Wait for the input combobox to appear
        await page.waitForSelector('input[id="address"]');
        console.log('Input combobox appeared.');

        // Type the location in the input combobox
        await page.type('input[id="address"]', location);
        console.log('Location typed:', location);

        // Press "Enter" key
        await page.keyboard.press('Enter');
        console.log('Pressed "Enter" key after typing location.');

        // Wait for a delay (5 seconds in this example)
        await page.waitForSelector('a.list-group-item.restaurant');

        // Extract data for each listing
        const listings = await page.$$eval('a.list-group-item.restaurant', elements =>
                    elements.map(element => {
                            const href = element.href;
                            const thumbnailSrc = element.querySelector('div.thumbnail img[alt="Restaurant Logo"]').src;
                            let description = element.querySelector('div.description h3.list-group-item-heading').textContent;
                            
                            // Remove index from description
                            description = description.replace(/^\d+\.\s+/, '');
                            
                            return { href, thumbnailSrc, description };
                    })
            );
        console.log('Listings:', listings);

        await browser.close();
    } catch (error) {
        console.error('Error fetching the webpage:', error);
    }
    }