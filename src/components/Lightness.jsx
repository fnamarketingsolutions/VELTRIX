import ClayCarCanvas from './ClayCarCanvas'

const displayCell =
  'min-h-0 overflow-hidden flex items-center justify-center font-display text-white uppercase leading-none tracking-tight text-[clamp(2.75rem,14vw,9rem)] md:text-[clamp(3.5rem,12vw,9rem)]'
const spacer = 'min-h-0 overflow-hidden max-md:hidden'

export default function Lightness() {
  return (
    <section
      className="relative h-auto md:h-[150svh] w-full overflow-hidden bg-black"
      id="lightness"
    >
      {/* Typography band — 2×2 mosaic on mobile, 4×2 on desktop */}
      <div className="relative z-[2] grid h-auto md:h-svh grid-cols-2 md:grid-cols-4 auto-rows-[minmax(22svh,auto)] md:auto-rows-auto md:grid-rows-[repeat(2,minmax(0,1fr))]">
        {/* Row 1 */}
        <div className={displayCell}>THE</div>

        <div className="relative min-h-0 overflow-hidden max-md:min-h-[22svh]">
          <span className="speed-marquee absolute top-1/2 whitespace-nowrap font-display text-[clamp(2.75rem,14vw,9rem)] md:text-[clamp(3.5rem,12vw,9rem)] uppercase leading-none tracking-tight text-white">
            SPEED
          </span>
        </div>

        <div className={displayCell}>OF</div>
        <div className={spacer} aria-hidden="true" />

        {/* Row 2 */}
        <div className={spacer} aria-hidden="true" />
        <div
          className={`${displayCell} text-[clamp(1.75rem,9vw,5.5rem)] md:text-[clamp(2rem,7vw,5.5rem)]`}
        >
          LIGHTNESS
        </div>
        <div className={spacer} aria-hidden="true" />
        <div className={spacer} aria-hidden="true" />
      </div>

      {/* Car band — clay sports car; drag mouse/finger to orbit */}
      <div className="relative z-[2] flex h-[50svh] items-center justify-center overflow-hidden px-[clamp(0.5rem,3vw,2rem)]">
        <div className="relative h-full w-full max-w-[min(96vw,72rem)]">
          <ClayCarCanvas />
        </div>
      </div>
    </section>
  )
}
