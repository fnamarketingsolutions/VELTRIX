import speedsterBg from '../assets/heroSection/porsche1.jpg'

const empty = 'min-h-0 overflow-hidden max-md:hidden'
const card =
  'min-h-0 overflow-hidden flex flex-col box-border bg-frost backdrop-blur-[22px] border border-white/10 p-[clamp(1rem,2.2vw,1.75rem)] text-white max-md:min-h-[48svh] max-md:w-full'

export default function Speedster() {
  return (
    <section
      className="relative h-svh w-full overflow-hidden bg-studio"
      id="speedster"
    >
      <img
        src={speedsterBg}
        alt="Speedster Background"
        className="absolute inset-0 z-[1] h-full w-full object-cover"
      />

      <div className="relative z-[2] grid h-full grid-cols-1 content-end p-5 md:grid-cols-4 md:grid-rows-[repeat(2,minmax(0,1fr))] md:content-stretch md:p-0">
        {/* Row 1 */}
        <div className={empty} aria-hidden="true" />
        <div className={empty} aria-hidden="true" />
        <div className={empty} aria-hidden="true" />
        <div className={empty} aria-hidden="true" />

        {/* Row 2 — card in col 2 */}
        <div className={empty} aria-hidden="true" />
        <div className={card}>
          <h2 className="m-0 shrink-0 font-serif text-[clamp(1.85rem,3.2vw,3.1rem)] font-medium leading-[0.95] tracking-[-0.01em]">
            Speedster
          </h2>
          <p className="mx-0 mt-[0.2rem] mb-[0.85rem] shrink-0 font-serif text-[clamp(1rem,1.8vw,1.45rem)] font-medium italic opacity-[0.92]">
            Limited edition
          </p>
          <p className="m-0 mb-[0.85rem] shrink-0 text-[clamp(0.7rem,0.85vw,0.7rem)] md:text-[clamp(0.55rem,0.85vw,0.7rem)] font-semibold uppercase tracking-[0.14em]">
            £125,000 / RESERVATION
          </p>
          <img
            className="mt-auto block min-h-0 w-full flex-1 border border-white/20 object-cover"
            src="/speedster-thumb.jpg"
            alt="Speedster preview"
            width="200"
            height="120"
          />
        </div>
        <div className={empty} aria-hidden="true" />
        <div className={empty} aria-hidden="true" />
      </div>
    </section>
  )
}
