import { useState } from 'react';
import styles from './FAQ.module.css';

// Your beautiful custom arrow component
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

// Separate component for clean styling and state mapping
function FAQItem({ question, answer, isOpen, onToggle }) {
    return (
        <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
            {/* Clickable header bar to toggle open state */}
            <div className={styles.faqQuestion} onClick={onToggle}>
                <p>{question}</p>
                <Arrow isOpen={isOpen} />
            </div>

            {/* Smooth conditional expansion zone */}
            {isOpen && (
                <div className={styles.faqAnswer}>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function FAQ() {
    // Tracks the index/ID of the open item. Defaults to null (all closed)
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "Is SafeVault truly non-custodial?",
            answer: "Yes. You hold your own private keys at all times. SafeVault never has access to your funds — we simply provide the secure interface and tooling."
        },
        {
            question: "Which blockchains does SafeVault support?",
            answer: "We support 50+ chains including Ethereum, Bitcoin, Solana, Polygon, Avalanche, BNB Chain, and all major EVM-compatible networks."
        },
        {
            question: "What happens if I lose my device?",
            answer: "Your seed phrase lets you recover your wallet on any device. We also offer encrypted cloud backup and hardware wallet integration for extra peace of mind."
        },
        {
            question: "Can I cancel my subscription anytime?",
            answer: "Absolutely. Cancel anytime with no hidden fees. Your wallet and funds remain accessible on the free Basic plan forever."
        },
        {
            question: "Is there a mobile app?",
            answer: "Yes! SafeVault is available on iOS and Android with full feature parity, biometric login, and push notifications for every transaction."
        }
    ];

    // Toggle logic: If clicked item is already open, close it (null). Otherwise, open it.
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className={styles.faqGrid}>
            <div className={styles.faqContainer}>
                {/* Scoped header elements properly to CSS modules */}
                <div className="heading">
                    <h1 className="title">Frequently Asked <span className="highlight">Questions</span></h1>
                    <p className="subtitle">Everything you need to know about SafeVault</p>
                </div>

                <div className={styles.accordionGroup}>
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}