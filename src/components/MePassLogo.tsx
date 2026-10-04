export default function MePassLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 25V13c0-2 1-3 2.5-3s2.5 1 2.5 3v12h4V13c0-2 1-3 2.5-3s2.5 1 2.5 3v12h4V13c0-4.4-3.6-8-8-8-2.6 0-4.9 1.3-6.3 3.3C14.3 6.3 12 5 9.4 5c-4.4 0-8 3.6-8 8v12h4v-12c0-2 1-3 2.5-3S6.4 11 6.4 13v12H12z" fill="#cd2026"/>
      <path d="M30 11h10v3H30zM30 17h8v3h-8zM30 23h10v3H30z" fill="#cd2026"/>
      <text x="44" y="27.5" fontFamily="Arial, Helvetica, sans-serif" fontSize="28" fontWeight="bold" fill="#1c1c1c" letterSpacing="-1">pass</text>
    </svg>
  );
}
