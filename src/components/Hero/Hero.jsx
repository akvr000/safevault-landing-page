import styles from './Hero.module.css';
import ArrowIcon from '../Common/ArrowIcon';
import LockIcon from '../Common/LockIcon';
import ShieldIcon from '../Common/ShieldIcon';
import BoltIcon from '../Common/BoltIcon';

export default function Hero() {
    // Array of stats data to map through dynamically
    const statsData = [
        { value: '500K+', label: 'Active Users' },
        { value: '$2B+', label: 'Assets Secured' },
        { value: '99.9%', label: 'Uptime' }
    ];

    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContainer}>
                
                {/* Left Column: Content and Metrics */}
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

                    {/* FIXED: Replaced standard button nested in anchor with an anchor styled as a button */}
                    <div className={styles.heroButtons}>
                        <a href="#pricing" className={styles.btnPrimary}>
                            Start Free Trial
                            <ArrowIcon />
                        </a>

                        <button className={styles.btnSecondary}>
                            Watch Demo
                        </button>
                    </div>

                    {/* OPTIMIZED: Clean mapping for stats layout */}
                    <div className={styles.heroStats}>
                        {statsData.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                <p className={styles.statValue}>{stat.value}</p>
                                <p className={styles.statLabel}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Visual Dashboard/Glassmorphism element */}
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