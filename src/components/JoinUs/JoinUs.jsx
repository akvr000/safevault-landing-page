import ArrowIcon from "../Common/ArrowIcon";
import styles from './JoinUs.module.css';

export default function JoinUs() {
    return (
        <section className={styles.joinUsGrid}>
            <div className={styles.container}>
                <h1 className={styles.title}>Ready to Secure Your Crypto?</h1>
                <p className={styles.description}>
                    Join 500,000+ users who trust SafeVault. Start free — no credit card required.
                </p>
                
                <div className={styles.buttons}>
                    <a href="#pricing" className={styles.btnPrimary}>
                        Start Free Today
                        <ArrowIcon />
                    </a>
                    
                    {/* Kept as a button—perfect for attaching a click modal or calendar link later */}
                    <button className={styles.btnSecondary}>
                        Book a Demo
                    </button>
                </div>
            </div>
        </section>
    );
}