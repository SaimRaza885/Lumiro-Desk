import { Element } from "react-scroll";
import { details, features } from "../constants";
import Button from "../components/Button";

const renderDetailIcon = (key?: string) => {
  switch (key) {
    case "offline":
      return (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="1" y1="1" x2="23" y2="23" />
          <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
          <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
          <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
          <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <line x1="12" y1="20" x2="12.01" y2="20" />
        </svg>
      );
    case "private":
      return (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "fast":
      return (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case "free":
    default:
      return (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
        </svg>
      );
  }
};

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container mt-20 lg:mt-32">
          {/* Main Dual Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative flex flex-col justify-between p-8 md:p-12 rounded-3xl border border-s3 bg-s2/70 shadow-sm hover:border-s4 transition-all duration-300 overflow-hidden group"
              >
                <div className="absolute inset-0 pointer-events-none rounded-3xl bg-p4/5 blur-2xl group-hover:bg-p4/8 transition-all duration-500" />
                <div>
                  <div className="mb-8 flex items-center justify-between">
                    <div className="flex size-14 items-center justify-center rounded-2xl border border-s3 bg-s1 p-2.5 shadow-sm">
                      <img
                        src={icon}
                        className="size-full object-contain"
                        alt={title}
                      />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-p3">
                      {caption}
                    </span>
                  </div>

                  <h2 className="mb-4 text-2xl font-bold tracking-tight text-p4 md:text-3xl">
                    {title}
                  </h2>
                  <p className="mb-8 text-base leading-relaxed text-p5">
                    {text}
                  </p>
                </div>

                <div className="relative pt-2">
                  <Button icon={button.icon}>
                    {button.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* 4 Feature Detail Highlights Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {details.map(({ id, iconKey, title, subtitle }) => (
              <div
                key={id}
                className="group relative flex items-center gap-4 p-5 rounded-2xl border border-s3 bg-s2/60 hover:bg-s2 hover:border-s4 transition-all duration-300 shadow-sm"
              >
                <div className="absolute inset-0 -z-10 rounded-2xl bg-p4/5 blur-xl group-hover:bg-p4/8 transition-all duration-500" />
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-s3 bg-s1 text-p4 shadow-sm group-hover:scale-105 group-hover:border-s4 transition-all duration-300">
                  {renderDetailIcon(iconKey)}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold text-p4 tracking-tight leading-snug">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="text-xs text-p5 mt-0.5 leading-normal">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
