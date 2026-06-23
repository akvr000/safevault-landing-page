import styles from './Footer.module.css';

export default function Footer() {
    // Abstract the navigation data out of the markup for clean maintenance
    const footerLinks = [
        {
            title: "Product",
            links: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "Security", href: "#features" },
                { label: "Roadmap", href: "/" }
            ]
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/" },
                { label: "Careers", href: "/" },
                { label: "Blog", href: "/" },
                { label: "Press", href: "/" }
            ]
        },
        {
            title: "Legal",
            links: [
                { label: "Privacy Policy", href: "/" },
                { label: "Terms of Service", href: "/" },
                { label: "Cookie Policy", href: "/" },
                { label: "Compliance", href: "/" }
            ]
        }
    ];

    return (
        <footer className={styles.footer}>
            <div className={`${styles.topBox} ${styles.box}`}>
                
                {/* Brand Info Column */}
                <div className={`${styles.info} ${styles.innerBox}`}>
                    <div className={styles.logo}>
                        <svg
                            width="35"
                            height="35"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#9333EA" />
                                    <stop offset="100%" stopColor="#3B82F6" />
                                </linearGradient>
                            </defs>
                            <rect x="2" y="2" width="60" height="60" rx="18" fill="url(#bgGradient)" />
                            <path
                                d="M32 12C27.5 16 21.5 19 16 19V33C16 45 24.5 51 31.2 53.5C31.7 53.7 32.3 53.7 32.8 53.5C39.5 51 48 45 48 33V19C42.5 19 36.5 16 32 12Z"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span>SafeVault</span>
                    </div>
                    <p>
                        Secure, non-custodial crypto wallet for the modern world.
                        Your keys, your crypto.
                    </p>

                    <ul className={styles.socialLinks}>
                        <li><a href="/">Twitter</a></li>
                        <li><a href="/">Discord</a></li>
                        <li><a href="/">Github</a></li>
                    </ul>
                </div>

                {/* OPTIMIZED: Mapping over the columns array instead of rewriting HTML elements */}
                {footerLinks.map((column, colIdx) => (
                    <div key={colIdx} className={`${styles.innerBox}`}>
                        <h4>{column.title}</h4>
                        <ul>
                            {column.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                    <a href={link.href}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Copyright & Credits Row */}
            <div className={`${styles.bottomBox} ${styles.box}`}>
                <div className={styles.copyright}>
                    <p>&copy; 2026 SafeVault. All rights reserved.</p>
                </div>
                <div className={styles.credit}>
                    <p>Crafted with React • Made with ❤️ & lots of coffee ☕</p>
                </div>
            </div>
        </footer>
    );
}