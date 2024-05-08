import Merchant from "./models/merchant.js";
import MenuItem from "./models/menu.js";

export async function searchMerchants(searchQuery) {
  try {
    const regex = new RegExp(searchQuery, "i");

    const originalSearch = await Merchant.find({ merchantname: regex });

    if (originalSearch.length < 1) {
      return [];
    }

    const similarMerchants = await Merchant.find({
      category: originalSearch[0].category,
      merchantname: { $ne: originalSearch[0].merchantname },
    });

    // Combine the original search and similar merchants into one array
    const combinedArray = originalSearch.concat(similarMerchants);

    return combinedArray;
  } catch (error) {
    console.error("Error searching merchants:", error);
    return []; // Return an empty array in case of an error
  }
}

  // takes in a restID for searching
  export async function checkoutMerchants(restID) {
    try {    
        const originalSearch = await Merchant.find({ restaurant_id: restID });

        if(originalSearch.length < 1) {
            return []
        }

        const similarMerchants = await Merchant.find({ category: originalSearch[0].category, merchantname: { $ne: originalSearch[0].merchantname } });

        // Combine the original search and similar merchants into one array
        const combinedArray = originalSearch.concat(similarMerchants);

        return combinedArray;
    } catch (error) {
      console.error('Error searching merchants:', error);
      return []; // Return an empty array in case of an error
    }
  };

export async function searchFoods(searchQuery) {
  try {
    const regex = new RegExp(searchQuery, "i");

    const allFoods = await MenuItem.find({ name: regex });

    if (!allFoods) {
      return {
        foods: [],
        merchantNames: [],
      };
    }
    const merchantNames = [];
    for (const food of allFoods) {
      const merchant = await Merchant.findOne({
        restaurant_id: food.restaurant_id,
      });
      if (merchant) {
        merchantNames.push(merchant);
      }
    }
    return {
      foods: allFoods,
      merchantNames: merchantNames,
    };
  } catch (error) {
    console.error("Error searching foods:", error);
    return []; // Return an empty array in case of an error
  }
}

export async function getMerchantInfo(merchID) {
  // Return two arguments, Merchant Object, and Array of foods with merchant_id
  const retMerchant = await Merchant.findOne({ restaurant_id: merchID });
  if (!retMerchant) {
    return {
      merchant: null,
      menuItems: [],
    };
  }
  const retMenuItems = await MenuItem.find({
    restaurant_id: retMerchant.restaurant_id,
  });

  return {
    merchant: retMerchant,
    menuItems: retMenuItems,
  };
}

// const {foods, merchantNames } = await searchFoods("Sandwich with Ham")
// console.log(foods)
// console.log(merchantNames)
