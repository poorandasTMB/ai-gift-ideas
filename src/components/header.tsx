// Header.tsx
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "../Assets/Images/header-logo.png"

const Header: React.FC = () => {
  const [toggle,SettToggle]=useState(false)
  if(toggle){
    document.body.style.overflow = 'hidden';
  }
  else{
    document.body.style.overflow = 'initial';
  }
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className={`center-content ${toggle?"active":""}`}>
        <nav>
          <Link to="" className='ai_btn' >
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <path d="M15.4434 5.54211C15.7907 6.30619 16.876 6.30619 17.2233 5.54211V5.54211C17.3211 5.32694 17.4936 5.15448 17.7087 5.05667V5.05667C18.4728 4.70936 18.4728 3.62405 17.7087 3.27674V3.27674C17.4936 3.17893 17.3211 3.00648 17.2233 2.7913V2.7913C16.876 2.02722 15.7907 2.02722 15.4434 2.7913V2.7913C15.3456 3.00648 15.1731 3.17893 14.9579 3.27674V3.27674C14.1939 3.62405 14.1939 4.70936 14.9579 5.05667V5.05667C15.1731 5.15448 15.3456 5.32694 15.4434 5.54211V5.54211Z" fill="white" />
                <path d="M17.2233 14.458C16.876 13.6939 15.7907 13.6939 15.4434 14.458V14.458C15.3456 14.6731 15.1731 14.8456 14.9579 14.9434V14.9434C14.1939 15.2907 14.1939 16.376 14.9579 16.7233V16.7233C15.1731 16.8211 15.3456 16.9936 15.4434 17.2088V17.2088C15.7907 17.9729 16.876 17.9729 17.2233 17.2088V17.2088C17.3211 16.9936 17.4936 16.8211 17.7087 16.7233V16.7233C18.4728 16.376 18.4728 15.2907 17.7087 14.9434V14.9434C17.4936 14.8456 17.3211 14.6731 17.2233 14.458V14.458Z" fill="white" />
                <path d="M10.4247 8.07188C10.2046 7.97183 10.0282 7.79543 9.92817 7.57532L8.91038 5.33618C8.5551 4.55458 7.44491 4.55458 7.08964 5.33618L6.07185 7.57532C5.9718 7.79543 5.7954 7.97183 5.57529 8.07188L3.33615 9.08967C2.55455 9.44494 2.55455 10.5551 3.33615 10.9104L5.57529 11.9282C5.7954 12.0282 5.9718 12.2047 6.07185 12.4248L7.08964 14.6639C7.44491 15.4455 8.55511 15.4455 8.91038 14.6639L9.92817 12.4248C10.0282 12.2047 10.2046 12.0282 10.4247 11.9282L12.6639 10.9104C13.4455 10.5551 13.4455 9.44494 12.6639 9.08967L10.4247 8.07188ZM9.0896 10.7049C8.91902 10.7823 8.78232 10.919 8.70485 11.0896V11.0896C8.42993 11.695 7.57009 11.695 7.29517 11.0896V11.0896C7.2177 10.919 7.081 10.7823 6.91042 10.7049V10.7049C6.30505 10.43 6.30505 9.57012 6.91042 9.2952V9.2952C7.081 9.21773 7.2177 9.08103 7.29517 8.91045V8.91045C7.57009 8.30508 8.42993 8.30508 8.70485 8.91045V8.91045C8.78232 9.08103 8.91902 9.21773 9.0896 9.2952V9.2952C9.69497 9.57012 9.69497 10.43 9.0896 10.7049V10.7049Z" fill="white" />
              </svg>
              <span>AI Gift Ideas</span>
            </button>
          </Link>
          <Link to="">Lists</Link>
          <Link to="">Gift Exchange</Link>
          <Link to="">Shop</Link>
          <Link to="">Occasions</Link>
          <Link to="">Ecards</Link>
          <Link to="">Blog</Link>
          <Link to="">FAQ</Link>
          <div className="login_btn mobile">
            <button>Log in</button>
            <button>Sign Up</button>
          </div>
        </nav>
      </div>
      <div className="login_btn deckstop">
        <button>Log in</button>
        <button>Sign Up</button>
        <button className='toggle' onClick={()=>SettToggle(!toggle)}>X</button>
      </div>

    </header>
  );
};

export default Header;
