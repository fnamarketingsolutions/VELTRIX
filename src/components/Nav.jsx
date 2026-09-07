export default function Nav() {
  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav
        className="pointer-events-auto grid grid-cols-[2.5rem_1fr_auto] items-center gap-6 min-w-[min(420px,calc(100vw-2rem))] py-[0.7rem] px-5 rounded-full bg-frost-strong backdrop-blur-[18px] border border-white/[0.08] max-[900px]:gap-3 max-[900px]:py-[0.65rem] max-[900px]:px-4"
        aria-label="Primary"
      >
        <button
          type="button"
          className="flex flex-col justify-center gap-[5px] w-6 h-6 p-0 border-0 bg-transparent cursor-pointer"
          aria-label="Open menu"
        >
          <span className="block h-[1.5px] w-full bg-white" />
          <span className="block h-[1.5px] w-full bg-white" />
        </button>
        <span className="font-display text-[1.15rem] tracking-[0.12em] text-center">
          PORSCHE
        </span>
        <button
          type="button"
          className="border-0 bg-transparent text-white font-sans text-[0.7rem] font-medium tracking-[0.14em] cursor-pointer whitespace-nowrap"
        >
          MODELS +
        </button>
      </nav>
    </header>
  )
}
