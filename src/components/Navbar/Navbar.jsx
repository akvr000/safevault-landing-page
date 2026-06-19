import styles from "./Navbar.module.css";
import Logo from '../Common/Logo'


function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logoIcon}>
          <Logo />
          <span className={styles.logoText}>SafeVault</span>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#steps">How it works</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          {/* <li>
            <a href="#about">About</a>
          </li> */}
        </ul>

        <button className={styles.signUpBtn}>Get Started</button>
      </nav>
    </header>
  );
}

export default Navbar;