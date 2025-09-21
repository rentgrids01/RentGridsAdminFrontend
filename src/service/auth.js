import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "YOUR_BACKEND_BASE_URL";

export const login = (email, password) =>
  axios.post(`${BASE_URL}/api/auth/login`, { email, password });

export const getMe = (token) =>
  axios.get(`${BASE_URL}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const forgotPassword = (email) =>
  axios.post(`${BASE_URL}/api/auth/forgot-password`, { email });

export const resetPassword = (data) =>
  axios.post(`${BASE_URL}/api/auth/reset-password`, data);