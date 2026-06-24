import { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from '../Common/Logo';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        
        {/* Logo Brand Group */}
        <div className={styles.logoIcon}>
          <Logo />
          <span className={styles.logoText}>SafeVault</span>
        </div>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.navActive : ""}`}>
          <li>
            <a href="#features" onClick={closeMenu}>Features</a>
          </li>
          <li>
            <a href="#steps" onClick={closeMenu}>How it works</a>
          </li>
          <li>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
          </li>
          <li>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
          </li>
          
          {/* Mobile-Only CTA button view hidden inside the drawer for tight viewports */}
          <li className={styles.mobileCtaLi}>
            <button className={styles.signUpBtnMobile} onClick={closeMenu}>Get Started</button>
          </li>
        </ul>

        {/* Desktop CTA Action Button (Hidden on Mobile) */}
        <button className={styles.signUpBtn}>Get Started</button>

        {/* Hamburger Toggle Action Icon Menu Button */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

      </nav>
    </header>
  );
}

export default Navbar;