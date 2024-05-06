import Merchant from './models/merchant.js';

export async function searchMerchants(searchQuery) {
    try {
        const regex = new RegExp(searchQuery, 'i');
    
        const originalSearch = await Merchant.find({ merchantname: regex });

        if(!originalSearch) {
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
  