const API_BASE_URL = 'http://localhost:5000';

// Generic API call function
export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  };

  try {
    console.log('🔄 Making API call to:', url);
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ API response:', data);
    return data;
  } catch (error) {
    console.error('❌ API call failed:', error);
    throw error;
  }
};

// Property API functions
export const propertyAPI = {
  getAllProperties: (params = {}) => {
    const queryParams = new URLSearchParams(params).toString();
    return apiCall(`/api/properties?${queryParams}`);
  },
};

export default propertyAPI;