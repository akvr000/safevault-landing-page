function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="bgGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>

      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="18"
        fill="url(#bgGradient)"
      />

      <path
        d="M32 12C27.5 16 21.5 19 16 19V33C16 45 24.5 51 31.2 53.5C31.7 53.7 32.3 53.7 32.8 53.5C39.5 51 48 45 48 33V19C42.5 19 36.5 16 32 12Z"
        fill="none"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Logo;