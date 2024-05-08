import express from 'express';
const router = express.Router();

const restaurants = {
    //mcdonalds
    "UberEats-McDonald's": "https://www.ubereats.com/store/mcdonalds-santa-clara-st/aCRdpwDxTLSFkPiYM8gs-A?diningMode=DELIVERY",
    "Doordash-McDonald's": "https://www.doordash.com/store/mcdonald's-san-jose-662214/?pickup=false",
    "Grubhub-McDonald's": "https://www.grubhub.com/restaurant/mcdonalds-1299-e-santa-clara-st-san-jose/2494036",
    "Postmates-McDonald's": "https://postmates.com/store/mcdonalds-777-story-rd/7F9BadIKQ1GHx_6uqpXyOw?diningMode=DELIVERY&sc=SEARCH_SUGGESTION",

    
    //Mountain Mike's
    "UberEats-MountainMikes": "https://www.ubereats.com/store/mountain-mikes-pizza-29-s-third-street/HAjXMv7kWBSkQpx6t4zt9w?diningMode=DELIVERY",
    "Doordash-MountainMikes": "https://www.doordash.com/store/25672403/?cursor=eyJzdG9yZV9wcmltYXJ5X3ZlcnRpY2FsX2lkcyI6WzFdfQ==&pickup=false",
    "Grubhub-MountainMikes": "https://www.grubhub.com/restaurant/mountain-mikes-pizza-29-s-third-st-san-jose/6803144",
    "Postmates-MountainMikes": "https://postmates.com/store/mountain-mikes-pizza-29-s-third-street/HAjXMv7kWBSkQpx6t4zt9w?diningMode=DELIVERY",
    "ChowNow-MountainMikes": "https://www.chownow.com/order/30209/locations/44681?deliversToMe=1&loc=San%20Jose%2C%20CA%2C%20USA",


    
    // La-victoria-taqueria
    "UberEats-LaVictoria": "https://www.ubereats.com/store/la-victoria-taqueria-4th-gish-st/73BsHi43R8WBDRD1BetvwA?diningMode=DELIVERY",
    "Doordash-LaVictoria": "https://www.doordash.com/store/190/?event_type=autocomplete&pickup=false",
    "Grubhub-LaVictoria": "https://www.grubhub.com/restaurant/la-victoria-taqueria-140-e-san-carlos-st-san-jose/2072725",
    "Postmates-LaVictoria": "https://postmates.com/store/la-victoria-taqueria-san-carlos-st/BafLSzDURd2zsEXw0E0bZA?sc=SEARCH_SUGGESTION",

    
    // Sushi Maru
    "UberEats-SushiMaru": "https://www.ubereats.com/store/izakaya-restaurant/cVUeh4H7TdW7OAXvMfRIaQ?sc=SEARCH_SUGGESTION",
    "Doordash-SushiMaru": "https://www.doordash.com/store/izakaya-restaurant-san-jose-93452/?event_type=autocomplete&pickup=false",
    "Postmates-SushiMaru": "https://postmates.com/store/izakaya-restaurant/cVUeh4H7TdW7OAXvMfRIaQ",
    "ChowNow-SushiMaru": "https://www.chownow.com/order/24203/locations/35585?deliversToMe=1&loc=San%20Jose%2C%20CA%2C%20USA8",

    // Banh Mi Oven
    "UberEats-BanhMiOven": "https://www.ubereats.com/store/banh-mi-oven-downtown/8WFl8MRcQ3a3Uzp9olYdQQ?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION",
    "Doordash-BanhMiOven": "https://www.doordash.com/store/2467541/?event_type=autocomplete&pickup=false",
    "Grubhub-BanhMiOven": "https://www.grubhub.com/restaurant/banh-mi-oven-e-san-fernando-st-221-e-san-fernando-st-san-jose/2300458",
    "Postmates-BanhMiOven": "https://postmates.com/store/banh-mi-oven-story-rd/PD_41WDtQZKjGkCsSoy7CA?diningMode=DELIVERY&ps=1&sc=SEARCH_SUGGESTION",
    "ChowNow-BanhMiOven": "https://www.chownow.com/order/37510/locations/57147?deliversToMe=1&loc=San%20Jose%2C%20CA%2C%20USA",
    
};


router.get('/place_order/:restaurantName', (req, res) => {
    const restaurantName = req.params.restaurantName;
    // Check if the restaurant exists 
    if (restaurants.hasOwnProperty(restaurantName)) {
       
        res.redirect(restaurants[restaurantName]);
    } else {
        res.status(404).json({ error: "Restaurant not found" });
    }
});

export default router;