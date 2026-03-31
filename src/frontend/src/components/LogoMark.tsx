interface LogoMarkProps {
  className?: string;
  compact?: boolean;
}

export default function LogoMark({
  className = "",
  compact = false,
}: LogoMarkProps) {
  const saffron = "oklch(0.72 0.158 58)";

  return (
    <div
      className={`flex items-center gap-2.5 select-none ${className}`}
      style={{ fontFamily: "'Bricolage Grotesque', 'Inter', sans-serif" }}
    >
      {/* Chess Knight SVG Icon */}
      <div
        className="flex-shrink-0 flex items-center justify-center"
        style={{ color: saffron }}
      >
        <svg
          viewBox="0 0 48 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={compact ? "w-8 h-10" : "w-10 h-12"}
          aria-hidden="true"
          focusable="false"
        >
          <title>Chess Knight</title>
          {/* Base */}
          <rect
            x="2"
            y="50"
            width="44"
            height="7"
            rx="2"
            fill="currentColor"
            opacity="0.3"
          />
          {/* Knight body */}
          <path
            d="M8 50V43C8 43 6 38 7 33C8 28 11 24 11 24C11 24 8 22 8 18C8 14 11 10 15 8C17 7 18 5 20 4C22 3 26 3 28 5C30 7 30 10 28 12C26 14 24 14 22 16C20 18 20 20 22 22C24 24 28 24 30 26C32 28 33 32 33 36C33 40 32 43 32 43V50H8Z"
            fill="currentColor"
          />
          {/* Eye */}
          <circle cx="23" cy="13" r="2" fill="oklch(0.16 0.09 22)" />
          {/* Mane accent */}
          <path
            d="M14 22C14 22 16 20 19 21C22 22 23 25 23 25"
            stroke="oklch(0.16 0.09 22)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Text block */}
      <div className="flex flex-col leading-none">
        {/* Line 1 */}
        <span
          style={{
            color: "white",
            fontWeight: 800,
            letterSpacing: "0.12em",
            fontSize: compact ? "0.85rem" : "1rem",
            lineHeight: 1.1,
            textRendering: "optimizeLegibility",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          ELITES CONSULTING
        </span>
        {/* Line 2 */}
        <span
          style={{
            color: "white",
            fontWeight: 700,
            letterSpacing: "0.08em",
            fontSize: compact ? "0.65rem" : "0.72rem",
            lineHeight: 1.3,
            textRendering: "optimizeLegibility",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          &amp; MANAGEMENT SERVICES
        </span>
        {/* Line 3 — tagline */}
        <span
          style={{
            color: saffron,
            fontWeight: 500,
            fontStyle: "italic",
            fontSize: compact ? "0.52rem" : "0.6rem",
            letterSpacing: "0.04em",
            lineHeight: 1.4,
            marginTop: "2px",
            textRendering: "optimizeLegibility",
            WebkitFontSmoothing: "antialiased",
          }}
        >
          Strategizing Victory, Empowering Leadership
        </span>
      </div>
    </div>
  );
}
