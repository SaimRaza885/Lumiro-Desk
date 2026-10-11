const Logo = ({ compact = false }: { compact?: boolean }) => (
  <span className="flex select-none items-center gap-2.5">
    <img
      src="/images/lumiro-icon.png"
      alt="Lumiro Desk"
      className={compact ? "size-9" : "size-11"}
    />
    <span
      className={`font-poppins font-black uppercase leading-none tracking-[-0.02em] text-p4 ${
        compact ? "text-xl" : "text-[26px]"
      }`}
    >
      Lumiro<span className="text-p1"> Desk</span>
    </span>
  </span>
);

export default Logo;
