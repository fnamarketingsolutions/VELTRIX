import footerBackgroundVideo from '../assets/footerAsseets/footer-bg.mp4'


const cell = 'min-h-0 overflow-hidden border border-white/10 bg-transparent'

const navLinks = [
  { label: 'Main', href: '#hero' },
  { label: 'Roadster', href: '#roadster' },
  { label: 'Speedster', href: '#speedster' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Team', href: '#' },
]

const socials = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-[45%] w-[45%]" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[42%] w-[42%]" aria-hidden="true">
        <path d="M6.5 8.5A2 2 0 1 1 6.5 4.5a2 2 0 0 1 0 4ZM4.75 10h3.5v9.5h-3.5V10Zm6 0h3.35v1.3h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35v4.65h-3.5v-4.12c0-.98-.02-2.24-1.37-2.24-1.37 0-1.58 1.07-1.58 2.17v4.19h-3.5V10Z" />
      </svg>
    ),
  },
  {
    label: 'X',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[38%] w-[38%]" aria-hidden="true">
        <path d="M17.7 3H20.5l-6.6 7.54L21.5 21h-5.3l-4.15-5.43L7.2 21H4.4l7.05-8.06L2.5 3h5.44l3.75 4.98L17.7 3Zm-1.86 16.2h1.55L8.24 4.7H6.58l9.26 14.5Z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[42%] w-[42%]" aria-hidden="true">
        <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C17.9 5 12 5 12 5s-5.9 0-7.7.3a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6.1 19 12 19 12 19s5.9 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer
      className="relative h-svh w-full overflow-hidden bg-[#1a1a1a]"
      id="footer"
    >
      {/* Background Video Placeholder */}
      <video
        className="absolute inset-0 z-[1] h-full w-full object-cover pointer-events-none select-none"
        src={footerBackgroundVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay to ensure crisp contrast over bright videos */}
      <div className="absolute inset-0 z-[1] bg-black/40 pointer-events-none" />

      <div className="relative z-[2] grid h-full grid-cols-4 grid-rows-[repeat(2,minmax(0,1fr))]">
        {/* Row 1 col 1 — nav */}
        <nav
          className={`${cell} flex flex-col justify-start gap-[clamp(0.35rem,0.8vw,0.65rem)] p-[clamp(1rem,2.2vw,1.75rem)]`}
          aria-label="Footer"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-serif text-[clamp(1.1rem,2vw,1.65rem)] font-medium leading-none text-white no-underline transition-opacity hover:opacity-70"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Row 1 cols 2–3 — empty */}
        <div className={cell} aria-hidden="true" />
        <div className={cell} aria-hidden="true" />

        {/* Row 1 col 4 — contacts */}
        <div
          className={`${cell} flex flex-col justify-start gap-[clamp(0.65rem,1.2vw,1rem)] p-[clamp(1rem,2.2vw,1.75rem)] text-white`}
        >
          <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-2.5 py-0.5 text-[clamp(0.55rem,0.75vw,0.7rem)] font-semibold tracking-[0.12em]">
            .CONTACTS
          </span>
          <p className="m-0 text-[clamp(0.55rem,0.8vw,0.72rem)] font-semibold uppercase leading-[1.55] tracking-[0.08em] opacity-90">
            Porscheplatz 1, 70435 Stuttgart,
            <br />
            Germany
          </p>
          <div className="flex flex-col gap-1 text-[clamp(0.55rem,0.8vw,0.72rem)] font-semibold uppercase leading-[1.45] tracking-[0.08em] opacity-90">
            <a href="mailto:enquiries@porsche.com" className="text-white no-underline hover:opacity-70">
              enquiries@porsche.com
            </a>
            <a href="mailto:press@porsche.com" className="text-white no-underline hover:opacity-70">
              press@porsche.com
            </a>
          </div>
          <p className="m-0 text-[clamp(0.5rem,0.7vw,0.65rem)] font-semibold uppercase leading-[1.45] tracking-[0.08em] opacity-70">
            Dr. Ing. h.c. F. Porsche AG — Placeholder company number
          </p>
        </div>

        {/* Row 2 cols 1–2 — marquee */}
        <div className={`${cell} relative col-span-2 min-h-0 overflow-hidden`}>
          <span className="footer-marquee absolute top-1/2 whitespace-nowrap font-display text-[clamp(4rem,14vw,11rem)] uppercase leading-none tracking-tight text-white">
            PORSCHE
          </span>
        </div>

        {/* Row 2 col 3 — empty */}
        <div className={cell} aria-hidden="true" />

        {/* Row 2 col 4 — socials */}
        <div className={`${cell} relative flex items-end justify-end p-[clamp(1rem,2.2vw,1.75rem)]`}>
          <ul className="m-0 flex list-none items-center gap-[clamp(0.4rem,0.8vw,0.65rem)] p-0">
            {socials.map(({ label, href, icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className="flex h-[clamp(2rem,3.2vw,2.75rem)] w-[clamp(2rem,3.2vw,2.75rem)] items-center justify-center rounded-full bg-white/15 text-white no-underline transition-colors hover:bg-white/25"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}