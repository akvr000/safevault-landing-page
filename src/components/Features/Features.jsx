import styles from './Features.module.css';
function Features() {
    return (
        <section id='features' className={styles.featuresSection}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Why Choose <span className={styles.highlight}>SafeVault</span></h1>
                <p className={styles.subtitle}>Everything you need for secure crypto management</p>
            </div>
            <div className={styles.featuresGrid}>
                <div className={styles.item}>
                    <svg className={`${styles.icon} ${styles.sheild}`} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                    <h2 className={styles.itemTitle}>Military-Grade Security</h2>
                    <p className={styles.itemDescription}>Bank-level encryption and multi-signature authentication keep your assets protected 24/7.</p>
                    <ul className={styles.itemFeaturesList}>
                        <li>256-bit AES encryption</li>
                        <li>Biometric authentication</li>
                        <li>Cold storage options</li>
                    </ul>

                </div>
                <div className={styles.item}>
                    <svg className={`${styles.icon} ${styles.bolt}`} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                    <h2 className={styles.itemTitle}>Lightning Fast</h2>
                    <p className={styles.itemDescription}>Execute transactions in seconds with our optimized blockchain infrastructure.</p>
                    <ul className={styles.itemFeaturesList}>
                        <li>Instant transfers</li>
                        <li>Low transaction fees</li>
                        <li>Real-time updates</li>
                    </ul>

                </div>
                <div className={styles.item}>
                    <svg className={`${styles.icon} ${styles.lock}`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <h2 className={styles.itemTitle}>Privacy First</h2>
                    <p className={styles.itemDescription}>Your data belongs to you. We never share or sell your information.</p>
                    <ul className={styles.itemFeaturesList}>
                        <li>Anonymous transactions</li>
                        <li>No KYC required</li>
                        <li>Zero data logging</li>
                    </ul>

                </div>

            </div>
        </section>
    )
}
export default Features;