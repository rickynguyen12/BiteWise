import express from 'express';
const app = express();

// Food Mappings
const restaurants = {
    "Bbot": "https://try.bbot.menu",
    "Brandibble": "https://www.brandibble.co",
    "Caviar": "https://www.trycaviar.com",
    "Chownow": "https://get.chownow.com",
    "Clorder": "https://www.clorder.com",
    "DeliverLogic": "https://www.deliverlogic.com",
    "Delivery.com": "https://www.delivery.com",
    "Doordash": "https://www.doordash.com",
    "Drizly": "https://drizly.com",
    "EatStreet": "https://eatstreet.com",
    "eDiningExpress": "https://www.ediningexpress.com",
    "Flipdish": "https://www.flipdish.com",
    "FreshBytes": "https://www.freshbytes.io",
    "GimmeGrub": "https://www.gimmegrub.com",
    "GloriaFood": "https://www.gloriafood.com",
    "GoParrot": "https://www.goparrot.ai",
    "Grubhub": "https://www.grubhub.com",
    "Hazlnut": "https://www.hazlnut.com",
    "Heartland": "https://www.heartland.us",
    "Just Eat UK": "https://www.just-eat.co.uk",
    "Lieferando": "https://www.lieferando.de",
    "Menufy": "https://www.menufy.com",
    "MenuSifu": "https://www.menusifu.com",
    "MenuStar": "https://getmenustar.com",
    "Ordering360": "https://ordering360.com",
    "OrderAngel": "https://orderangel.eu",
    "OrderSnapp": "https://www.ordersnapp.com",
    "Restaurant Login": "https://www.restaurantlogin.com",
    "Seamless": "http://seamless.com", 
    "Silverware POS": "http://www.silverwarepos.com",
    "Slice": "https://slicelife.com",
    "SlickMenus": "https://slickmenus.com",
    "SpotOn": "https://www.spoton.com",
    "Squarespace": "https://squarespace.com",
    "Toast": "https://pos.toasttab.com",
    "Upserve": "https://upserve.com",
    "Weebly": "https://www.weebly.com",
    "WIX": "https://wix.com"
};

app.get('/place_order/:restaurantName', (req, res) => {
    const restaurantName = req.params.restaurantName;
    // Check if the restaurant exists 
    if (restaurants.hasOwnProperty(restaurantName)) {
        // Redirecting user to food platform
        res.redirect(restaurants[restaurantName]);
    } else {
        // Error case
        res.status(404).json({ error: "Restaurant not found" });
    }
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});