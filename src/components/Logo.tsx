interface LogoProps {
  compact?: boolean;
}

const Logo = ({ compact = false }: LogoProps) => (
  <span className="flex select-none items-center gap-2 sm:gap-2.5 shrink-0">
    <img
      src="/images/lumiro-icon.png"
      alt="Lumiro Desk"
      width={compact ? 28 : 32}
      height={compact ? 28 : 32}
      className={`rounded-lg object-contain shrink-0 ${
        compact ? "w-7 h-7" : "w-8 h-8"
      }`}
      style={{
        width: compact ? "28px" : "32px",
        height: compact ? "28px" : "32px",
      }}
    />
    <span className="font-sans font-semibold tracking-[-0.02em] text-p4 text-[14px] sm:text-[15px] lg:text-[16px] flex items-center gap-1 sm:gap-1.5 leading-none shrink-0">
      <span>Lumiro</span>
      <span className="text-p5 font-normal text-[13px] sm:text-[14px] lg:text-[15px]">Desk</span>
    </span>
  </span>
);

export default Logo;
