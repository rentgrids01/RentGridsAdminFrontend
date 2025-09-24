export const getNotifications = async () => {
  // Replace this with your backend API endpoint!
  try {
    const res = await fetch('http://localhost:5000/api/notifications', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch notifications');
    const json = await res.json();
    return json.data || [];
  } catch (e) {
    return [];
  }
};


// export const getNotifications = async () => {
//   // If you have a backend API:
//   // const res = await fetch('http://localhost:5000/api/notifications', { cache: 'no-store' });
//   // if (!res.ok) throw new Error('Failed to fetch notifications');
//   // const json = await res.json();
//   // return json.data || [];
  
//   // Temporary dummy data (remove when backend is ready)
//   return [
//     { from: "Admin", content: "Welcome to the dashboard!", icon: "" },
//     { from: "System", content: "Your property was approved.", icon: "" },
//     { from: "Support", content: "You have a new message.", icon: "" }
//   ];
// };