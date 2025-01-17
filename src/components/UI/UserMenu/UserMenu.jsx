// src/components/UI/user-menu/UserMenu.jsx
import React, { useState, useRef, useEffect } from 'react';
import './../../../styles/user-menu.css';

const UserMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dropdownRef = useRef(null);

  // Check if user is logged in when component mounts
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
    window.location.href = '/login';
  };

  const navigateToLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className="user-menu" ref={dropdownRef}>
      <span className="user-icon" onClick={toggleDropdown}>
        <i className="ri-user-line"></i>
      </span>

      {isDropdownOpen && (
        <div className="dropdown-content">
          {isLoggedIn ? (
            <>
              <div className="user-info">
                <span className="welcome-text">
                  Welcome, {JSON.parse(localStorage.getItem('user'))?.name || 'User'}
                </span>
              </div>
              <div className="dropdown-items">
                <button onClick={() => window.location.href = '/profile'}>
                  <i className="ri-user-settings-line"></i>
                  Profile
                </button>
                <button onClick={handleLogout} className="logout-btn">
                  <i className="ri-logout-box-line"></i>
                  Disconnect
                </button>
              </div>
            </>
          ) : (
            <div className="dropdown-items">
              <button onClick={navigateToLogin}>
                <i className="ri-login-box-line"></i>
                Login
              </button>
              <button onClick={() => window.location.href = '/register'}>
                <i className="ri-user-add-line"></i>
                Register
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UserMenu;