import React from 'react';
import styles from './LogoSlider.module.css'


const trusted = ["Coinbase", "Binance", "Kraken", "Ledger", "MetaMask", "Chainlink", "Uniswap", "Aave"];

export const LogoSlider = () => {
  return (
    <div className={styles.logoSlider}>
      <p className={styles.heading}>Trusted & integrated with</p>
      <div className={styles.logoTrack}>
        {/* First set of names */}
        {trusted.map((name, index) => (
          <span key={`original-${index}`} className={styles.companyName}>
            {name}
          </span>
        ))}
        {/* Duplicated set of names for the seamless loop */}
        {trusted.map((name, index) => (
          <span key={`duplicate-${index}`} className={styles.companyName}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;