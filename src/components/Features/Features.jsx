import styles from './Features.module.css';
function Features() {

    const featuresData = [
        {
            title: "Military-Grade Security",
            description: "Bank-level encryption and multi-signature authentication keep your assets protected 24/7.",
            bulletPoints: ["256-bit AES encryption", "Biometric authentication", "Cold storage options"],
            icon: (
                <svg className={`${styles.icon} ${styles.sheild}`} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            )
        },
        {
            title: "Lightning Fast",
            description: "Execute transactions in seconds with our optimized blockchain infrastructure.",
            bulletPoints: ["Instant transfers", "Low transaction fees", "Real-time updates"],
            icon: (
                 <svg className={`${styles.icon} ${styles.bolt}`} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            )
        },
        {
            title: "Privacy First",
            description: "Your data belongs to you. We never share or sell your information.",
            bulletPoints: ["Anonymous transactions", "No KYC required", "Zero data logging"],
            icon: (
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
            )
        }
    ];
    return (

        <section id='features' className={styles.featuresSection}>
            <div className="heading">
                <h1 className="title">Why Choose <span className="highlight">SafeVault</span></h1>
                <p className="subtitle">Everything you need for secure crypto management</p>
            </div>
            <div className={styles.featuresGrid}>
                {/* 2. Mapping clean layout with unique index keys */}
                {featuresData.map((item, index) => (
                    <div key={index} className={styles.item}>
                        {/* Rendering the icon with custom class properties dynamically */}
                        <div>
                            {item.icon}
                        </div>
                        
                        <h2 className={styles.itemTitle}>{item.title}</h2>
                        <p className={styles.itemDescription}>{item.description}</p>
                        
                        <ul className={styles.itemFeaturesList}>
                            {item.bulletPoints.map((point, subIndex) => (
                                <li key={subIndex}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Features;