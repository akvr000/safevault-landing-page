import styles from './Testimonial.module.css'; 


// 1. The data from image_0a352c.png is kept safely inside this component file
const testimonialsData = [
    {
        id: 1,
        initials: "AM",
        name: "Alex Morgan",
        role: "DeFi Investor",
        text: "SafeVault completely changed how I manage my crypto portfolio. The security features alone are worth every penny.",
        avatarBg: "#a855f7" // Purple
    },
    {
        id: 2,
        initials: "SC",
        name: "Sarah Chen",
        role: "Crypto Trader",
        text: "The lightning-fast transaction speeds are incredible. Nothing comes close to SafeVault's performance and reliability.",
        avatarBg: "#2563eb" // Blue
    },
    {
        id: 3,
        initials: "MW",
        name: "Marcus Williams",
        role: "Blockchain Developer",
        text: "The API access on Pro plan is fantastic. Integrated SafeVault into our platform in hours. Docs are clean and support is top-notch.",
        avatarBg: "#6366f1" // Indigo
    }
];

// 2. Sub-component for a single card
function TestimonialCard({ initials, name, role, text, avatarBg }) {
    return (
        <div className={styles.testimonialCard}>
            <div className={styles.stars}>⭐⭐⭐⭐⭐</div>

            <p className={styles.reviewText}>"{text}"</p>

            {/* User Profile Footer */}
            <div className={styles.userProfile}>
                <div className={styles.avatar} style={{ backgroundColor: avatarBg }}>
                    {initials}
                </div>
                <div className={styles.userInfo}>
                    <h4 className={styles.userName}>{name}</h4>
                    <span className={styles.userRole}>{role}</span>
                </div>
            </div>
        </div>
    );
}

// 3. The main exported component that holds the layout structure
function Testimonial() {
    return (
        <section className={styles.testimonialsSection}>
            <div className="heading">
                <h1 className="title">Loved by <span className="highlight">Thousands</span></h1>
                <p className="subtitle">Don't take our word for it</p>
            </div>

            <div className={styles.testimonialGrid}>
                {testimonialsData.map((item) => (
                    // <TestimonialCard
                    //     key={item.id}
                    //     initials={item.initials}
                    //     name={item.name}
                    //     role={item.role}
                    //     text={item.text}
                    //     avatarBg={item.avatarBg}
                    // />
                    <TestimonialCard key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
}

export default Testimonial;