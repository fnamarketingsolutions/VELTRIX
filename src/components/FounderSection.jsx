import React from 'react'

const cell = 'min-h-0 overflow-hidden border border-white/10 bg-transparent'
const spacer = `${cell} max-lg:hidden`

const founderImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800',
]

export default function FoundersSection() {
  return (
    <section
      id="founders"
      className="relative h-auto lg:h-svh w-full overflow-hidden bg-[#1a1a1a] text-white"
    >
      <div className="relative z-10 grid h-auto lg:h-full grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(35svh,auto)] lg:auto-rows-auto lg:grid-rows-[repeat(2,minmax(0,1fr))]">
        
        {/* ROW 1, COL 1 — Image 1 */}
        <div className={`${cell} relative min-h-[35svh] lg:min-h-0`}>
          <img
            src={founderImages[0]}
            alt="Founder 1"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* ROW 1, COL 2 — Signature Text 1 */}
        <div className={`${cell} flex items-center justify-center p-[clamp(1rem,2.2vw,1.75rem)]`}>
          <span className="font-serif italic text-[clamp(1.5rem,5vw,3rem)] font-extralight tracking-widest text-white/90 select-none">
            F. Veltrix
          </span>
        </div>

        {/* ROW 1, COL 3 — Signature Text 2 */}
        <div className={`${cell} flex items-center justify-center p-[clamp(1rem,2.2vw,1.75rem)]`}>
          <span className="font-serif italic text-[clamp(1.5rem,5vw,3rem)] font-extralight tracking-widest text-white/90 select-none">
            W. Veltrix
          </span>
        </div>

        {/* ROW 1, COL 4 — Image 2 */}
        <div className={`${cell} relative min-h-[35svh] lg:min-h-0`}>
          <img
            src={founderImages[1]}
            alt="Founder 2"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* ROW 2, COL 1 — Blank Cell */}
        <div className={spacer} aria-hidden="true" />

        {/* ROW 2, COL 2 — Image 3 */}
        <div className={`${cell} relative min-h-[35svh] lg:min-h-0`}>
          <img
            src={founderImages[2]}
            alt="Founder 3"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* ROW 2, COL 3 — Signature Text 3 */}
        <div className={`${cell} flex items-center justify-center p-[clamp(1rem,2.2vw,1.75rem)]`}>
          <span className="font-serif italic text-[clamp(1.5rem,5vw,3rem)] font-extralight tracking-widest text-white/90 select-none">
            A. Veltrix
          </span>
        </div>

        {/* ROW 2, COL 4 — Blank Cell */}
        <div className={spacer} aria-hidden="true" />

      </div>
    </section>
  )
}
