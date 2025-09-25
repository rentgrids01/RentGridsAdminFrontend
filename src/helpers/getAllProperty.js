// // export const getAllProperty = async (page = 1, limit = 20) => {
// //   try {
// //     // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties?page=${page}&limit=${limit}`, {
// //     // const res = await fetch(`http://localhost:5000/api/properties?page=${page}&limit=${limit}`, {
// //     const res = await fetch(`http://localhost:5000/api/properties`, {
// //     //   const res = await fetch('http://localhost:5000/api/properties', { 
// //       method: "GET",
// //       cache: "no-store",
// //     });

// //     if (!res.ok) {
// //       throw new Error("Failed to fetch properties");
// //     }

// //     const result = await res.json();
// //     return result.data || [];
// //   } catch (error) {
// //     console.error("Error fetching properties:", error);
// //     return [];
// //   }
// // };


// // RentGridsAdminFrontend/src/helpers/getAllProperty.js
// import { propertyAPI } from '@/services/api';

// export const getAllProperty = async () => {
//   try {
//     console.log('Fetching properties from API...');
    
//     const response = await propertyAPI.getAllProperties({
//       page: 1,
//       limit: 20,
//       status: 'published' // or remove this to get all properties
//     });

//     console.log('API Response:', response);

//     if (response.success) {
//       return response.data || [];
//     } else {
//       console.error('API returned error:', response.message);
//       return [];
//     }
//   } catch (error) {
//     console.error('Error fetching properties:', error);
//     // Return mock data for development
//     return [
//       {
//         _id: '1',
//         title: 'Luxury 3BHK Apartment in Bandra',
//         property_type: 'apartment',
//         listing_type: 'Rent',
//         bedrooms: 3,
//         area: 1200,
//         monthly_rent: 25000,
//         location: 'Bandra, Mumbai',
//         image: '/images/properties/p-1.jpg'
//       },
//       {
//         _id: '2',
//         title: 'Modern 2BHK Villa in Whitefield',
//         property_type: 'villa',
//         listing_type: 'Sale',
//         bedrooms: 2,
//         area: 1800,
//         sale_price: 12500000,
//         location: 'Whitefield, Bangalore',
//         image: '/images/properties/p-2.jpg'
//       }
//     ];
//   }
// };

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