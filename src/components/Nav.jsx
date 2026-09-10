import { useEffect, useState } from 'react'
import { getLenis } from '../hooks/useLenis'

const menuLinks = [
  { label: 'About', href: '#founders' },
  { label: 'Contact', href: '#footer' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const lenis = getLenis()

    if (open) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      lenis?.start()
      document.body.style.overflow = ''
    }

    return () => {
      lenis?.start()
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const goTo = (href) => {
    setOpen(false)
    const lenis = getLenis()
    if (lenis) {
      lenis.start()
      lenis.scrollTo(href)
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-black/85 backdrop-blur-md transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!open}
      >
        <nav
          id="site-menu"
          className="flex flex-col items-center justify-center gap-[clamp(0.5rem,2vw,1.25rem)]"
          aria-label="Menu"
        >
          {menuLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              tabIndex={open ? 0 : -1}
              onClick={(event) => {
                event.preventDefault()
                goTo(href)
              }}
              className="font-display text-[clamp(3.5rem,12vw,8rem)] leading-none tracking-[0.06em] text-white no-underline uppercase transition-opacity hover:opacity-70"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <nav
          className="pointer-events-auto grid grid-cols-[2.5rem_1fr_auto] items-center gap-6 min-w-[min(420px,calc(100vw-2rem))] py-[0.7rem] px-5 rounded-full bg-frost-strong backdrop-blur-[18px] border border-white/[0.08] max-[900px]:gap-3 max-[900px]:py-[0.65rem] max-[900px]:px-4"
          aria-label="Primary"
        >
          <button
            type="button"
            className="relative w-6 h-6 p-0 border-0 bg-transparent cursor-pointer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute left-0 right-0 top-1/2 block h-[1.5px] bg-white transition-transform duration-300 ${
                open ? 'rotate-45' : '-translate-y-[3.25px]'
              }`}
            />
            <span
              className={`absolute left-0 right-0 top-1/2 block h-[1.5px] bg-white transition-transform duration-300 ${
                open ? '-rotate-45' : 'translate-y-[3.25px]'
              }`}
            />
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
    </>
  )
}
