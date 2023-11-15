import React, { useState } from "react";
import "./NavbarMobile.css";

function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar__mobile">
        <img
          src="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2xvZ28ucG5nIiwiaWF0IjoxNjk5OTMzNDczLCJleHAiOjIwMTUyOTM0NzN9.qpMLowDeTQGQyV7oKvkMXRY231qiua2TwnoERiDxU5w"
          alt="logotipo Medicos Sin Fronteras"
        />
        <img
          className="navbar__mobile--menu"
          src="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/menu-bar.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L21lbnUtYmFyLnN2ZyIsImlhdCI6MTY5OTk5MDU5MCwiZXhwIjoxNzMxNTI2NTkwfQ.jwESIG105CaiiMbTaCAVLVFQolvDWRg8UbvPmQRNfBc&t=2023-11-14T19%3A36%3A30.354Z"
          alt="imagen de 3 barras Medicos Sin Fronteras"
          onClick={toggleMenu}
        />
      </div>
      {menuOpen && (
        <div className="navbar__mobile--menu--content">
          {/* Menu Mobile*/}
          <a href="https://www.msf.mx/">SITIO WEB PRINCIPAL</a>
          <a href="#register">
            <button 
              className="button__primary"
              onClick={toggleMenu}>
                REGISTRARME AHORA!
            </button>
          </a>
        </div>
        )}
    </>
  );
}

export default NavbarMobile;
