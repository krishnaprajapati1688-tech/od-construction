type LogoProps = {
  variant?: 'gold' | 'dark' | 'light' | 'mono-dark' | 'mono-light';
  showWordmark?: boolean;
  /** Controls the wordmark text size. Defaults to 'md' (unchanged from before). */
  wordmarkSize?: 'sm' | 'md' | 'lg';
  className?: string;
  markClassName?: string;
};

/**
 * OD Construction brand mark.
 *
 * Concept: an interlocked "O" (ring) and "D" (spine + bowl) built from pure
 * structural geometry — a roofline chevron above and a foundation line below
 * turn the monogram into a tiny building elevation. Renders as crisp vector
 * at any size (navbar, favicon, letterhead, signage) and recolors instantly
 * via `variant`, so the same component is the single source of truth for
 * every brand touchpoint.
 */
export default function Logo({
  variant = 'gold',
  showWordmark = true,
  wordmarkSize = 'md',
  className = '',
  markClassName = 'h-9 w-9',
}: LogoProps) {
  const sizeMap: Record<NonNullable<LogoProps['wordmarkSize']>, { name: string; tag: string }> = {
    sm: { name: 'text-base', tag: 'text-[0.55rem]' },
    md: { name: 'text-lg', tag: 'text-[0.58rem]' },
    lg: { name: 'text-xl sm:text-2xl', tag: 'text-[0.62rem]' },
  };
  const sizes = sizeMap[wordmarkSize];
  const palette: Record<NonNullable<LogoProps['variant']>, { badge: string; mark: string; accent: string; word: string }> = {
    gold: { badge: 'none', mark: '#C9A24B', accent: '#E4C878', word: 'currentColor' },
    dark: { badge: '#0A1628', mark: '#C9A24B', accent: '#E4C878', word: '#0A1628' },
    light: { badge: '#FFFFFF', mark: '#0A1628', accent: '#C9A24B', word: '#FFFFFF' },
    'mono-dark': { badge: 'none', mark: '#0A1628', accent: '#0A1628', word: '#0A1628' },
    'mono-light': { badge: 'none', mark: '#FFFFFF', accent: '#FFFFFF', word: '#FFFFFF' },
  };
  const p = palette[variant];

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 120 120" className={markClassName} role="img" aria-label="OD Construction logo">
        {p.badge !== 'none' && <rect x="2" y="2" width="116" height="116" rx="22" fill={p.badge} />}
        {/* roofline accent */}
        <path
          d="M16 32 L44 20 L60 26 L76 20 L104 32"
          fill="none"
          stroke={p.accent}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* O ring */}
        <circle cx="45" cy="62" r="25" fill="none" stroke={p.mark} strokeWidth="12" />
        {/* D — spine + bowl */}
        <path
          d="M75 38 h9 a24 24 0 0 1 0 48 h-9 Z"
          fill={p.mark}
        />
        <rect x="66" y="38" width="9" height="48" fill={p.mark} />
        {/* foundation line */}
        <path
          d="M14 100 H106"
          stroke={p.accent}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
      {showWordmark && (
        <span className="flex items-center gap-3.5">
          <span className="hidden h-8 w-px bg-current opacity-15 sm:block" />
          <span className="leading-none" style={{ color: p.word }}>
            <span className={`block font-display font-semibold tracking-tight ${sizes.name}`}>OD Construction</span>
            <span className={`dim-tick mt-0.5 block opacity-70 ${sizes.tag}`}>Est. 2008 &middot; Mumbai</span>
          </span>
        </span>
      )}
    </span>
  );
}
