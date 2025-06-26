export default function GardenGraphic() {
  return (
    <div className="flex justify-center my-8">
      <svg
        viewBox="0 0 600 200"
        width="100%"
        height="200"
        style={{ maxWidth: 800 }}
        aria-hidden="true"
      >
        {/* Background */}
        <rect x="0" y="0" width="600" height="200" fill="#FEFAE0" />
        {/* Distant hill */}
        <path d="M0 160 Q 150 120 300 160 T 600 160 V200 H0Z" fill="#DDA15E" />
        {/* Middle hill */}
        <path d="M0 180 Q 200 140 400 180 T 600 180 V200 H0Z" fill="#BC6C25" />
        {/* Foreground hill */}
        <path d="M0 200 Q 100 170 300 200 T 600 200 V200 H0Z" fill="#606C38" />
        {/* Abstract plants */}
        <ellipse cx="120" cy="170" rx="12" ry="32" fill="#283618" opacity="0.8" />
        <ellipse cx="500" cy="175" rx="10" ry="28" fill="#283618" opacity="0.7" />
        <ellipse cx="180" cy="185" rx="7" ry="18" fill="#BC6C25" opacity="0.8" />
        <ellipse cx="420" cy="190" rx="8" ry="20" fill="#DDA15E" opacity="0.7" />
        {/* Simple flower shapes */}
        <circle cx="140" cy="170" r="5" fill="#FEFAE0" />
        <circle cx="510" cy="170" r="4" fill="#FEFAE0" />
        <circle cx="430" cy="190" r="3" fill="#FEFAE0" />
        {/* Accent dot */}
        <circle cx="300" cy="185" r="2.5" fill="#3ec6c6" />
      </svg>
    </div>
  );
} 