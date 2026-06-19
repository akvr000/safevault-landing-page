import styles from "./Steps.module.css";

function Steps() {
    return (
        <section id="steps" className={styles.stepsSection}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Up and Running in <span className={styles.highlight}>3 Simple Steps</span></h1>
                <p className={styles.subtitle}>No complexity, no confusion — just security</p>
            </div>
            <div className={styles.stepsGrid}>
                <div className={styles.item}>
                    <svg className={`${styles.icon} ${styles.sheild}`}  xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                    <p className={styles.itemLabel}>STEP 01</p>
                    <h3 className={styles.itemTitle}>Create Your Vault</h3>
                    <p className={styles.itemDescription}>Sign up in under 2 minutes. Generate your secure wallet with a seed phrase only you control.</p>
                </div>
                <div className={styles.item}>
                    <svg className={`${styles.icon} ${styles.bolt}`} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                    <p className={styles.itemLabel}>STEP 02</p>
                    <h3 className={styles.itemTitle}>Fund & Connect</h3>
                    <p className={styles.itemDescription}>Deposit crypto, connect your hardware wallet, or import an existing wallet seamlessly.</p>

                </div>
                <div className={styles.item}>
                    <svg className={`${styles.icon} ${styles.uptrend}`} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                    <p className={styles.itemLabel}>STEP 03</p>
                    <h3 className={styles.itemTitle}>Manage with Confidence</h3>
                    <p className={styles.itemDescription}>Send, receive, swap, and track your portfolio — all behind military-grade security.</p>

                </div>

            </div>
        </section>
    )
}

export default Steps;