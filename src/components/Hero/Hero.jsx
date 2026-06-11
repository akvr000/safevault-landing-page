import './Hero.css';

// SVG icons as React components for better maintainability and styling control
function ArrowIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
        </svg>
    )
}

function LockIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
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

function ShieldIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
    )
}

function BoltIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </svg>
    )
}

// Main Hero component with structured layout and semantic HTML for better accessibility and SEO
function Hero() {
    return (
        <section className="hero">
            <div className="left-column">
                <div className="badge">
                    <span>🚀 The Future of Crypto Security</span>
                </div>
                <div className="hero-content">
                    {/* <h1 className="hero-title">Your Crypto,</h1>
                    <h1 className="hero-title highlight">Absolutely Safe</h1> */}
                    <h1 className="hero-title">Your Crypto, <span className="highlight">Absolutely Safe</span></h1>
                    <p className="hero-description">SafeVault combines military-grade encryption with intuitive design. Store, send, and manage your cryptocurrency with confidence.</p>
                </div>
                <div className="hero-buttons">
                    <button className="btn-primary">Start Free Trial
                        <ArrowIcon />
                    </button>
                    <button className="btn-secondary">Watch Demo</button>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <p className="stat-value">500K+</p>
                        <p className="stat-label">Active Users</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-value">$2B+</p>
                        <p className="stat-label">Assets Secured</p>
                    </div>
                    <div className="stat-item">
                        <p className="stat-value">99.9%</p>
                        <p className="stat-label">Uptime</p>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="hero-visual">
                    <div className="glass-panel">

                        <div className="lock-icon icon">
                            <LockIcon />
                        </div>

                        <div className="shield-icon icon">
                            <ShieldIcon />
                        </div>

                        <div className="bolt-icon icon">
                            <BoltIcon />
                        </div>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> */}
                    </div>
                </div>
            </div>
        </section >
    )
}


export default Hero;