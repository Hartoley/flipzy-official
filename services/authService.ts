// src/services/authService.ts

import axios from "axios";

const API = "https://chef-chiller-node.onrender.com/user";

// Save token to storage
const saveToken = (token: string) => {
  localStorage.setItem("token", token);
};

// Remove token
export const logout = () => {
  localStorage.removeItem("token");
};

// Login function
export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${API}/login`, {
      email,
      password,
    });

    if (res.data?.token) {
      saveToken(res.data.token);
    }

    return res.data;
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || "Login failed. Try again."
    );
  }
};

// Register user
export const registerUser = async (
  name: string,
  email: string,
  password: string,
  phone: string,
  state: string
) => {
  try {
    const res = await axios.post(`${API}/register`, {
      name,
      email,
      password,
      phone,
      state,
    });

    return res.data;
  } catch (err: any) {
    throw new Error(
      err?.response?.data?.message || "Registration failed. Try again."
    );
  }
};

// Get profile
export const getProfile = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${API}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err: any) {
    throw new Error("Unable to fetch profile.");
  }
};
