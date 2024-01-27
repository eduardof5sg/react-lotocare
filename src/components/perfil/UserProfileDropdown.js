import React, { useEffect, useRef } from 'react';
import './UserProfileDropdown.css';
import { Link } from "react-router-dom";

const UserProfileDropdown = ({ isVisible }) => {
  const dropdownRef = useRef();

  const handleDocumentClick = (event) => {
    const isClickInsideDropdown = dropdownRef.current && dropdownRef.current.contains(event.target);

    if (!isClickInsideDropdown) {
      // Close the dropdown when clicking outside
      closeDropdown();
    }
  };

  const closeDropdown = () => {
    // Add any additional cleanup or state changes needed when closing the dropdown
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [isVisible]);

  return (
    <div className={`dropdown_wrapper ${isVisible ? '' : 'hide'} dropdown_wrapper--fade-in`} ref={dropdownRef}>
      <section className="dropdown_group">
        <div className="user-name">Joe Doe</div>
        <div className="email">joe.doe@atheros.ai</div>
      </section>
      <hr className="divider" />
      <menu>
        <li>
        <Link to="/profilePage" id="link">
            <i className="bx bx-user"></i>
          </Link>
          My profile
        </li>
        <li>
          {' '}
          <i class='bx bx-cog'></i>
          Settings
        </li>
      </menu>
      <hr className="divider" />
      <menu>
        <li>
        <i class='bx bx-book-open'></i> Tutorials
        </li>
        <li>
          {' '}
          <i class='bx bx-help-circle' ></i>
          Help Center
        </li>
      </menu>
      <hr className="divider" />
      <menu>
        <li style={{color:"#ef9e0a"}}>
        <i class='bx bx-star' ></i> Go Premium
        </li>
        <li style={{ color: '#E3452F' }}>
          {' '}
          <i class='bx bx-exit' ></i>
          Log Out
        </li>
      </menu>
    </div>
  );
};

export default UserProfileDropdown;
