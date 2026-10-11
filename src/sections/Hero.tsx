import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Vercel-style Ambient Light Glow Effect */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 flex justify-center">
        {/* Top luminous horizon beam */}
        {/* <div className="h-px w-[min(90vw,900px)] bg-gradient-to-r from-transparent via-slate-400/30 dark:via-white/35 to-transparent" /> */}
        
        {/* Primary radial spotlight flare */}
        {/* <div className="absolute -top-32 h-[420px] w-[min(95vw,860px)] rounded-full bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.06)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16)_0%,rgba(148,163,184,0.06)_45%,transparent_75%)] blur-2xl" /> */}

        {/* Secondary soft ambient halo */}
        {/* <div className="absolute top-4 h-[260px] w-[min(85vw,520px)] rounded-full bg-[radial-gradient(circle,rgba(0,0,0,0.03)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,transparent_70%)] blur-3xl" /> */}
      </div>

      <Element name="hero">
        <div className="container relative z-10 pt-36 pb-20 md:pt-44 md:pb-28">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            {/* Top pill badge */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-s3 bg-s2/80 px-4 py-1.5 backdrop-blur-md shadow-sm">
              <span className="size-1.5 rounded-full bg-slate-400 dark:bg-slate-300 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-p3">
                Personal Schedule · Windows 10 & 11
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-[44px] font-black uppercase leading-[1.05] tracking-[-0.03em] text-p4 sm:text-[68px] lg:text-[88px] max-md:leading-[1.1]">
              Your day, in a{" "}
              <span className="bg-gradient-to-b from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
                new light
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-10 max-w-2xl text-[18px] leading-[1.6] text-p5 sm:text-[21px]">
              Lumiro Desk brings your schedule, tasks, goals, diary, and
              finances together in one calm, offline Windows app — private by
              design, your data never leaves your PC.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col items-center gap-4">
              <LinkScroll to="download" offset={-100} spy smooth>
                <Button icon="/images/zap.svg">Download free</Button>
              </LinkScroll>
              <span className="text-xs font-medium uppercase tracking-wider text-p3 opacity-75">
                100% Offline · No account required · ~4 MB
              </span>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
