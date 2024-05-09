"use client"

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { NULL } from 'sass';
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const login = async (values) => {
    setLoading(true);
    // Implement your login logic using axios or any other method
    try {
      // Your login API call here
      const response = await axios.post('https://b0f4-102-88-63-74.ngrok-free.app/auth', values);
      setUser(response.data);
      setToken(response.data.token)
      setStatus(response.data.status.type)
      window.localStorage.setItem("nameStore", JSON.stringify(response.data.details.username))
      window.localStorage.setItem("tokenStore", JSON.stringify(response.data.details["refresh-token"]))
      console.log(response.data.details.role)
      if(response.data.status.type == "SUCC"){
        router.push("/dashboard");
    } else {
        setError('Login failed. Please check your credentials and try again.');
    }
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
      throw error; // Rethrow the error to handle it in the component
    }
    finally {
      setLoading(false);
    }
  };

  const logoutNow = () => {
    // Implement your logout logic
    console.log("fuck i am logging out")
    router.push("/")
    window.localStorage.removeItem('tokenStore')
    window.localStorage.removeItem('nameStore')
    window.localStorage.removeItem('refreshToken')

    setUser(null);
  };

  const refreshToken = async () => {
    const storedToken = window.localStorage.getItem("tokenStore")
    const storedName = window.localStorage.getItem("nameStore")
    const refreshToken = JSON.parse(storedToken);
    const username = JSON.parse(storedName);
    const formData = {
      "username": username,
      "refresh-token": refreshToken,
    };
    console.log("2024",formData)

    try {
      // Your token refresh API call here
      const response = await axios.post('https://b0f4-102-88-63-74.ngrok-free.app/auth/refresh', formData);
      window.localStorage.setItem("refreshToken", JSON.stringify(response.data.token))
      window.localStorage.setItem("nameStore", JSON.stringify(response.data.details.username))
      window.localStorage.setItem("tokenStore", JSON.stringify(response.data.details["refresh-token"]))
      // setToken(response.data.token);
      // setUser(response.data);
      console.log(response)
      // Optionally, update the user or handle the refresh response as needed
    } catch (error) {
      console.error('Token refresh failed:', error);
      // Handle token refresh error, possibly redirect to login page
      logoutNow();
      router.push("/");
    }
  };

  useEffect(() => {
    const storedToken = window.localStorage.getItem("tokenStore")
    if(storedToken) {
      setTimeout(() => {
      refreshToken()
    }, 1000); 
    } else {
      console.log("we don't need you now refresh-token")
    }
    
  }, [])

  return (
    <AuthContext.Provider value={{ user, login, logoutNow, token, status, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);