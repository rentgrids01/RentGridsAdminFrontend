// RentGridsAdminFrontend/src/helpers/getAllProperty.js
import { propertyAPI } from '@/services/api';

export const getAllProperty = async () => {
  try {
    console.log('🚀 Starting to fetch properties from real API...');
    
    const response = await propertyAPI.getAllProperties({
      page: 1,
      limit: 50, // Get more properties to see all
      status: '' // Get all statuses (published, draft, etc.)
    });

    console.log('📊 API Response success:', response.success);
    console.log('📈 Number of properties received:', response.data?.length || 0);

    if (response.success && response.data) {
      // Log first property to see the actual structure
      if (response.data.length > 0) {
        console.log('🔍 First property data structure:', response.data[0]);
        console.log('🏷️ Property title:', response.data[0].title);
        console.log('📍 Property location:', response.data[0].city, response.data[0].locality);
        console.log('💰 Property price:', response.data[0].monthly_rent || response.data[0].sale_price);
      }
      
      return response.data;
    } else {
      console.error('❌ API returned unsuccessful response:', response);
      return [];
    }
  } catch (error) {
    console.error('💥 Critical error fetching properties:', error);
    
    // Return empty array instead of mock data to see real issue
    return [];
  }
};