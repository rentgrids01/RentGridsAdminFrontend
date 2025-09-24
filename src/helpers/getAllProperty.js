// // export async function getAllProperty() {
// //   try {
// //     const res = await fetch('http://localhost:5000/api/properties', { cache: 'no-store' });
// //     if (!res.ok) throw new Error('Failed to fetch properties');
// //     const json = await res.json();
// //     return json.data || [];
// //   } catch (e) {
// //     return [];
// //   }
// // }
// // export const getAllProperty = async () => {
// //   try {
// //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties?page=1&limit=10`, {
// //       method: "GET",
// //       cache: "no-store", // ensures fresh data in Next.js
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
// export const getAllProperty = async () => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties`, {
//       method: "GET",
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch properties");
//     }

//     const result = await res.json();
//     return result.data || [];
//   } catch (error) {
//     console.error("Error fetching properties:", error);
//     return [];
//   }
// };

export const getAllProperty = async (page = 1, limit = 20) => {
  try {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties?page=${page}&limit=${limit}`, {
    // const res = await fetch(`http://localhost:5000/api/properties?page=${page}&limit=${limit}`, {
    const res = await fetch(`http://localhost:5000/api/properties`, {
    //   const res = await fetch('http://localhost:5000/api/properties', { 
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch properties");
    }

    const result = await res.json();
    return result.data || [];
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
};
