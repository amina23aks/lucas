// src/App.jsx
import React, { useEffect } from 'react';
import Layout from "./components/Layout/Layout";
import { AuthProvider } from './components/AuthContext/AuthContext.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,   // Animation duration in milliseconds
      once: true,       // Whether animation should happen only once
      easing: 'ease'    // Animation timing function
    });
  }, []);

  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default App;