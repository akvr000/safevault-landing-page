import styles from './Hero.module.css';
import ArrowIcon from '../Common/ArrowIcon';
import LockIcon from '../Common/LockIcon';
import ShieldIcon from '../Common/ShieldIcon';
import BoltIcon from '../Common/BoltIcon';

function Hero() {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
                <div className={styles.leftColumn}>
                    <div className={styles.badge}>
                        <span>🚀 The Future of Crypto Security</span>
                    </div>

                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>
                            Your Crypto,{' '}
                            <span className={styles.highlight}>
                                Absolutely Safe
                            </span>
                        </h1>

                        <p className={styles.heroDescription}>
                            SafeVault combines military-grade encryption with intuitive design.
                            Store, send, and manage your cryptocurrency with confidence.
                        </p>
                    </div>

                    <div className={styles.heroButtons}>
                        <a href="#pricing" rel="noopener noreferrer"><button className={styles.btnPrimary}>
                            Start Free Trial
                            <ArrowIcon />
                        </button></a>

                        <button className={styles.btnSecondary}>
                            Watch Demo
                        </button>
                    </div>

                    <div className={styles.heroStats}>
                        <div className={styles.statItem}>
                            <p className={styles.statValue}>500K+</p>
                            <p className={styles.statLabel}>Active Users</p>
                        </div>

                        <div className={styles.statItem}>
                            <p className={styles.statValue}>$2B+</p>
                            <p className={styles.statLabel}>Assets Secured</p>
                        </div>

                        <div className={styles.statItem}>
                            <p className={styles.statValue}>99.9%</p>
                            <p className={styles.statLabel}>Uptime</p>
                        </div>
                    </div>
                </div>

                <div className={styles.rightColumn}>
                    <div className={styles.heroVisual}>
                        <div className={styles.glassPanel}>

                            <div className={`${styles.lockIcon} ${styles.icon}`}>
                                <LockIcon />
                            </div>

                            <div className={`${styles.shieldIcon} ${styles.icon}`}>
                                <ShieldIcon />
                            </div>

                            <div className={`${styles.boltIcon} ${styles.icon}`}>
                                <BoltIcon />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;