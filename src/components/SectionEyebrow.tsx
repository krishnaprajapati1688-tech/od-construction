export default function SectionEyebrow({ label, align = 'left' }: { label: string; align?: 'left' | 'center' }) {
  return (
    <div className={`dim-line ${align === 'center' ? 'mx-auto max-w-xs' : 'max-w-xs'}`}>
      <span className="dim-tick">{label}</span>
    </div>
  );
}
