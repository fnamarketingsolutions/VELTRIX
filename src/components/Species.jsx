import speciesBg from '../assets/secondSection/porsche3.jpg'

const blockBg = 'min-h-0 overflow-hidden border border-white/10 bg-[#888C8F]'
const displayCell = `${blockBg} flex items-center justify-center font-display text-white uppercase leading-none tracking-tight text-[clamp(3.5rem,12vw,9rem)]`

export default function Species() {
  return (
    <section
      className="relative h-[150svh] w-full overflow-hidden bg-[#888C8F]"
      id="species"
    >
      <img
        src={speciesBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-[1] h-full w-full object-cover"
      />

      <div className="relative z-[2] grid h-full grid-cols-4 grid-rows-[repeat(3,minmax(0,1fr))]">
        {/* Row 1 */}
        <div className={displayCell}>A</div>
        <div className={displayCell}>NEW</div>
        <div className={blockBg} aria-hidden="true" />
        <div className={displayCell}>SPECIES</div>

        {/* Row 2 */}
        <div
          className={`${blockBg} flex flex-col justify-start gap-[clamp(0.75rem,1.5vw,1.25rem)] p-[clamp(1rem,2.2vw,1.75rem)] text-white`}
        >
          <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-2.5 py-0.5 text-[clamp(0.55rem,0.75vw,0.7rem)] font-semibold tracking-[0.12em]">
            .01
          </span>
          <h2 className="m-0 font-serif text-[clamp(1.25rem,2.4vw,2.15rem)] font-medium leading-[1.05]">
            The &apos;Celeritas Levitas&apos;{' '}
            <em className="italic font-medium">Philosophy</em>
          </h2>
          <p className="m-0 text-[clamp(0.5rem,0.75vw,0.65rem)] font-semibold uppercase leading-[1.55] tracking-[0.12em] opacity-90">
            Our motto, meaning &apos;speed in lightness,&apos; is at the core of
            everything we do. Instead of chasing excessive power, we focus on
            reducing weight. This makes our…
          </p>
        </div>

        <div className={blockBg} aria-hidden="true" />

        {/* Row 2 col 3 — BORN IS marquee */}
        <div className={`${blockBg} relative`}>
          <span className="born-marquee absolute top-1/2 whitespace-nowrap font-display text-[clamp(3.5rem,12vw,9rem)] uppercase leading-none tracking-tight text-white">
            BORN IS
          </span>
        </div>

        <div className={blockBg} aria-hidden="true" />

        {/* Row 3 */}
        <div className={blockBg} aria-hidden="true" />
        <div className={blockBg} aria-hidden="true" />

        {/* Row 3 col 3 — image */}
        <div className={`${blockBg} relative`}>
          <img
            src={speciesBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className={blockBg} aria-hidden="true" />
      </div>
    </section>
  )
}
