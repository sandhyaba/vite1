import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';
import "./Navbar2.css"
import Logo from "../../assets/logo.png"

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (

    <nav className={scroll ? 'navbar scrolled' : 'navbar'}>
      <img src={Logo} alt="" className='logo-image' />
      <div className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
        <button className="menu-close-button" onClick={closeMenu}>×</button>
        <li><Link to='hero' offset={-160} smooth={true} duration={500} onClick={closeMenu}>Home</Link></li>
        <li><Link to='program' offset={-210} smooth={true} duration={500} onClick={closeMenu}>Programs</Link></li>
        <li><Link to='about' offset={-180} smooth={true} duration={500} onClick={closeMenu}>About us</Link></li>
        <li><Link to='campus' offset={-180} smooth={true} duration={500} onClick={closeMenu}>Campus</Link></li>
        <li><Link to='slider-container' offset={-160} smooth={true} duration={500} onClick={closeMenu}>Testimonials</Link></li>
        <li><Link to='contact' offset={-130} smooth={true} duration={500} onClick={closeMenu}><button className='btn'>Contact us</button></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
