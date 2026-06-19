import styles from './FAQ.module.css'

function Arrow({ isOpen }) {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
            }}
        >
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}

// function DownArrow(){

//     return(
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m6 9 6 6 6-6"></path></svg>
//     )
// }
// function UpArrow(){
//     return(
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"></path></svg>
//     )
// }

function FAQ() {
    return (
        <section id="faq" className={styles.faqGrid}>
            <div className={styles.faqContainer}>
                <div className={styles.faqHeading}>
                    <h1 className={styles.faqTitle}>Frequently Asked <span className={styles.highlight}>Questions</span></h1>
                    <p className={styles.description}>Everything you need to know about SafeVault</p>
                </div>
                <details>
                    <summary>Is SafeVault truly non-custodial?

                    </summary>
                    <p>Yes. You hold your own private keys at all times. SafeVault never has access to your funds — we simply provide the secure interface and tooling.</p>
                </details>
                <details>
                    <summary>Which blockchains does SafeVault support?
                    </summary>
                    <p>We support 50+ chains including Ethereum, Bitcoin, Solana, Polygon, Avalanche, BNB Chain, and all major EVM-compatible networks</p>
                </details>
                <details>
                    <summary>What happens if I lose my device?
                    </summary>
                    <p> Your seed phrase lets you recover your wallet on any device. We also offer encrypted cloud backup and hardware wallet integration for extra peace of mind.</p>
                </details>
                <details>
                    <summary>Can I cancel my subscription anytime?
                    </summary>
                    <p> Absolutely. Cancel anytime with no hidden fees. Your wallet and funds remain accessible on the free Basic plan forever.</p>
                </details>
                <details>
                    <summary>Is there a mobile app?
                    </summary>
                    <p>Yes! SafeVault is available on iOS and Android with full feature parity, biometric login, and push notifications for every transaction.</p>
                </details>
            </div>
        </section>
    )
}

export default FAQ;