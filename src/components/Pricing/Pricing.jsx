import { useState } from 'react';
import styles from './Pricing.module.css';

export default function Pricing() {
    // 1. Establish state hook to track whether annual billing is active (true/false)
    const [isAnnual, setIsAnnual] = useState(false);

    // 2. Clear dataset array mapping holding both price variations
    const pricingPlans = [
        {
            title: "Basic",
            description: "Perfect for beginners",
            monthlyPrice: 0,
            annualPrice: 0,
            features: ["Up to 3 wallets", "Basic security features", "Email support", "Mobile app access"],
            btnText: "Get Started",
            customClass: styles.basic,
            btnClass: styles.btnBasic
        },
        {
            title: "Pro",
            description: "For serious traders",
            monthlyPrice: 29,
            annualPrice: 23, // Discounted monthly rate for annual plan
            features: ["Unlimited wallets", "Advanced security suite", "Priority 24/7 support", "API access", "Portfolio analytics"],
            btnText: "Start Free Trial",
            isPopular: true,
            customClass: styles.pro,
            btnClass: styles.btnPro
        },
        {
            title: "Whale 🐋",
            description: "For institutions",
            monthlyPrice: 199,
            annualPrice: 159, // Discounted monthly rate for annual plan
            features: ["Everything in Pro", "Dedicated account manager", "Custom integrations", "White-label option", "SLA guarantee"],
            btnText: "Contact Sales",
            customClass: styles.whale,
            btnClass: styles.btnWhale
        }
    ];

    return (
        <section id="pricing" className={styles.pricingSection}>
            {/* FIXED: Scoped global header elements to CSS module mappings */}
            <div className="heading">
                <h1 className="title">Simple <span className="highlight">Transparent Pricing</span></h1>
                <p className="subtitle">Choose the plan that fits your needs</p>
            </div>

            {/* 3. Interactive State Buttons */}
            <div className={styles.toggle}>
                <button
                    className={`${styles.btn} ${!isAnnual ? styles.active : ''}`}
                    onClick={() => setIsAnnual(false)}
                >
                    Monthly
                </button>
                <button
                    className={`${styles.btn} ${isAnnual ? styles.active : ''}`}
                    onClick={() => setIsAnnual(true)}
                >
                    Annual <span className={styles.discount}>−20%</span>
                </button>
            </div>

            {/* 4. Display Pricing Content */}
            <div className={styles.pricingContent1}>
                {pricingPlans.map((plan, index) => (
                    <div key={index} className={`${styles.item} ${plan.customClass}`}>
                        {plan.isPopular && <div className={styles.tag}>Most Popular</div>}

                        <h2 className={styles.itemTitle}>{plan.title}</h2>
                        <p className={styles.itemDescription}>{plan.description}</p>

                        {/* Dynamic evaluation based on state condition */}
                        <p className={styles.itemPlan}>
                            <span className={styles.price}>
                                ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                            </span>
                            {isAnnual ? '/month (billed annually)' : '/month'}
                        </p>

                        <ul className={styles.itemPlanFeatures}>
                            {plan.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>

                        <button className={`${styles.itemBtn} ${plan.btnClass}`}>
                            {plan.btnText}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}