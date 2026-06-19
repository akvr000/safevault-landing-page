import styles from './Pricing.module.css'

function Pricing() {
    return (
        <section id="pricing" className={styles.pricingSection}>
            <div className={styles.heading}>
                <h1 className={styles.title}>Simple <span className={styles.highlight}>Transparent Pricing</span></h1>
                <p className={styles.subtitle}>Choose the plan that fits your needs</p>
            </div>
            <div className={styles.toggle}>
                <button className={`${styles.btn} ${styles.btnPrimary}`}>Monthly</button>
                <button className={`${styles.btn} ${styles.btnSecondary}`}>Annual <span className={styles.discount}>−20%</span></button>
            </div>
            <div className={styles.pricingContent1}>
                <div className={`${styles.item} ${styles.basic}`}>
                    <h2 className={styles.itemTitle}>Basic</h2>
                    <p className={styles.itemDescription}>Perfect for beginners</p>
                    <p className={styles.itemPlan}><span className={styles.price}>$0</span>/month</p>
                    <ul className={styles.itemPlanFeatures}>
                        <li>Up to 3 wallets</li>
                        <li>Basic security features
                        </li>
                        <li>Email support</li>
                        <li>Mobile app access</li>
                    </ul>
                    <button className={`${styles.itemBtn} ${styles.btnBasic}`} >Get Started</button>
                </div>
                <div className={`${styles.item} ${styles.pro}`}>
                    <div className={styles.tag}>Most Popular</div>
                    <h2 className={styles.itemTitle}>Pro</h2>
                    <p className={styles.itemDescription}>For serious traders</p>
                    <p className={styles.itemPlan}><span className={styles.price}>$29</span>/month</p>
                    <ul className={styles.itemPlanFeatures}>
                        <li>Unlimited wallets</li>
                        <li>Advanced security suite</li>
                        <li>Priority 24/7 support</li>
                        <li>API access</li>
                        <li>Portfolio analytics</li>
                    </ul>
                    <button className={`${styles.itemBtn} ${styles.btnPro}`} >Start Free Trial</button>
                </div>
                <div className={`${styles.item} ${styles.whale}`}>

                    <h2 className={styles.itemTitle}>Whale 🐋</h2>
                    <p className={styles.itemDescription}>For For institutions</p>
                    <p className={styles.itemPlan}><span className={styles.price}>$199</span>/month</p>
                    <ul className={styles.itemPlanFeatures}>
                        <li>Everything in Pro</li>
                        <li>Dedicated account manager</li>
                        <li>Custom integrations</li>
                        <li>White-label option</li>
                        <li>SLA guarantee</li>
                    </ul>
                    <button className={`${styles.itemBtn} ${styles.btnWhale}`} >Contact Sales</button>
                </div>
            </div>
        </section>
    )
}

export default Pricing;