import ClayCarCanvas from './ClayCarCanvas'

const displayCell =
  'min-h-0 overflow-hidden flex items-center justify-center font-display text-white uppercase leading-none tracking-tight text-[clamp(3.5rem,12vw,9rem)]'

export default function Lightness() {
  return (
    <section
      className="relative h-[150svh] w-full overflow-hidden bg-black"
      id="lightness"
    >
      {/* Typography band — 2 grid rows */}
      <div className="relative z-[2] grid h-svh grid-cols-4 grid-rows-[repeat(2,minmax(0,1fr))]">
        {/* Row 1 */}
        <div className={displayCell}>THE</div>

        <div className="relative min-h-0 overflow-hidden">
          <span className="speed-marquee absolute top-1/2 whitespace-nowrap font-display text-[clamp(3.5rem,12vw,9rem)] uppercase leading-none tracking-tight text-white">
            SPEED
          </span>
        </div>

        <div className={displayCell}>OF</div>
        <div className="min-h-0 overflow-hidden" aria-hidden="true" />

        {/* Row 2 */}
        <div className="min-h-0 overflow-hidden" aria-hidden="true" />
        <div
          className={`${displayCell} text-[clamp(2rem,7vw,5.5rem)]`}
        >
          LIGHTNESS
        </div>
        <div className="min-h-0 overflow-hidden" aria-hidden="true" />
        <div className="min-h-0 overflow-hidden" aria-hidden="true" />
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
