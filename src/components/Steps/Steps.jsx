import styles from "./Steps.module.css";

function Steps() {

    const stepsData = [
        {
            title: "Create Your Vault",
            description: "Sign up in under 2 minutes. Generate your secure wallet with a seed phrase only you control.",
            icon: (
                <svg className={`${styles.icon} ${styles.sheild}`} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
            )
        },
        {
            title: "Fund & Connect",
            description: "Deposit crypto, connect your hardware wallet, or import an existing wallet seamlessly.",

            icon: (
                <svg className={`${styles.icon} ${styles.bolt}`} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
            )
        },
        {
            title: "Manage with Confidence",
            description: "Send, receive, swap, and track your portfolio — all behind military-grade security.",

            icon: (
                <svg className={`${styles.icon} ${styles.uptrend}`} xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
            )
        }
    ];
    return (
        <section id="steps" className={styles.stepsSection}>
            <div className="heading">
                <h1 className="title">Up and Running in <span className="highlight">3 Simple Steps</span></h1>
                <p className="subtitle">No complexity, no confusion — just security</p>
            </div>

            <div className={styles.stepsGrid}>
                {stepsData.map((step, index) => {
                    // Dynamically generate "01", "02", "03" based on array index positioning
                    const stepNumber = String(index + 1).padStart(2, '0');

                    return (
                        <div key={index} className={styles.item}>
                            <div >
                                {step.icon}
                            </div>

                            {/* Computed template literal for the label step string */}
                            <p className={styles.itemLabel}>STEP {stepNumber}</p>

                            <h3 className={styles.itemTitle}>{step.title}</h3>
                            <p className={styles.itemDescription}>{step.description}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Steps;