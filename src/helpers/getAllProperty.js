export async function getAllProperty() {
  try {
    const res = await fetch('http://localhost:5000/api/properties', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch properties');
    const json = await res.json();
    return json.data || [];
  } catch (e) {
    return [];
  }
}