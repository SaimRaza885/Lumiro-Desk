import { ButtonProp } from "../types";
import { Marker } from "./Marker";

// Dynamic vector icon renderer that respects light/dark mode and maintains contrast
const renderButtonIcon = (icon?: string) => {
  if (!icon) return null;

  const lower = icon.toLowerCase();

  // If it's zap / lightning (Hero button)
  if (lower.includes("zap")) {
    return (
      <svg
        className="size-5 shrink-0 transition-transform duration-300 group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    );
  }

  // If it's download (Download button)
  if (lower.includes("download")) {
    return (
      <svg
        className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    );
  }

  // If it's magic / tour
  if (lower.includes("magic") || lower.includes("touch") || lower.includes("tour")) {
    return (
      <svg
        className="size-5 shrink-0 transition-transform duration-300 group-hover:rotate-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    );
  }

  // If it's docs / book
  if (lower.includes("doc")) {
    return (
      <svg
        className="size-5 shrink-0 transition-transform duration-300 group-hover:scale-105"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    );
  }

  // Fallback for custom image url
  return <img src={icon} alt="icon" className="size-5 object-contain" />;
};

const Button = ({
  icon,
  children,
  href,
  containerClassName = "",
  onClick,
  markerFill,
}: ButtonProp) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-5 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden border border-s3/40">
        <span className="absolute -left-[1px] text-p1">
          <Marker fill={markerFill || "currentColor"} />
        </span>
        {icon && (
          <span className="size-9 mr-4 flex items-center justify-center z-10 text-p1 shrink-0 rounded-xl bg-s1/60 dark:bg-s1/80 border border-s3 shadow-sm">
            {renderButtonIcon(icon)}
          </span>
        )}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase tracking-wider">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      className={`relative p-0.5 g5 rounded-2xl shadow-500 group cursor-pointer inline-block transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] ${containerClassName}`}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={`relative p-0.5 g5 rounded-2xl shadow-500 group cursor-pointer inline-block transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] ${containerClassName}`}
      onClick={onClick}
      type="button"
    >
      <Inner />
    </button>
  );
};

export default Button;
