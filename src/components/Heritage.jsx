import { useEffect, useRef } from 'react'
import soulImage from '../assets/secondSection/grey-porsche.png'

const blockBg = 'min-h-0 overflow-hidden border border-white/10 bg-[#888C8F]'
const textBlock = `${blockBg} flex flex-col justify-start gap-[clamp(0.75rem,1.5vw,1.25rem)] p-[clamp(1rem,2.2vw,1.75rem)] text-white`
const spacer = `${blockBg} max-md:hidden`

export default function Heritage() {
  const videoRef = useRef(null)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    vid.muted = true
    void vid.play().catch(() => {})
  }, [])

  return (
    <section
      className="relative h-auto md:h-svh w-full overflow-hidden bg-[#888C8F]"
      id="heritage"
    >
      <div className="relative z-[2] grid h-auto md:h-full grid-cols-1 md:grid-cols-4 auto-rows-[minmax(42svh,auto)] md:auto-rows-auto md:grid-rows-[repeat(2,minmax(0,1fr))]">
        {/* Left — full width on mobile; spans cols 1–2 both rows on desktop */}
        <div className={`${blockBg} relative min-h-[50svh] md:min-h-0 md:col-span-2 md:row-span-2`}>
          <img
            src={soulImage}
            alt="Soul"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Row 1 col 3 — empty */}
        <div className={spacer} aria-hidden="true" />

        {/* Row 1 col 4 — .02 */}
        <div className={textBlock}>
          <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-2.5 py-0.5 text-[clamp(0.65rem,0.75vw,0.7rem)] font-semibold tracking-[0.12em]">
            .02
          </span>
          <h2 className="m-0 font-serif text-[clamp(1.5rem,4.5vw,2.15rem)] font-medium leading-[1.05]">
            Creating a New <em className="italic font-medium">Class: FEV</em>
          </h2>
          <p className="m-0 text-[0.7rem] md:text-[clamp(0.5rem,0.75vw,0.65rem)] font-semibold uppercase leading-[1.55] tracking-[0.12em] opacity-90">
            Our Speedster weighs just 895 kg, making it almost half the weight of
            many modern electric sports cars. This approach not only dramatically
            improves dynamics but also allows for more compact and
            energy-efficient batteries.
          </p>
        </div>

        {/* Row 2 col 3 — .03 */}
        <div className={textBlock}>
          <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-2.5 py-0.5 text-[clamp(0.65rem,0.75vw,0.7rem)] font-semibold tracking-[0.12em]">
            .03
          </span>
          <h2 className="m-0 font-serif text-[clamp(1.5rem,4.5vw,2.15rem)] font-medium leading-[1.05]">
            The Soul of a Classic,{' '}
            <em className="italic font-medium">the Heart of the Future</em>
          </h2>
          <p className="m-0 text-[0.7rem] md:text-[clamp(0.5rem,0.75vw,0.65rem)] font-semibold uppercase leading-[1.55] tracking-[0.12em] opacity-90">
            Longbow is the spiritual successor to legends like the Lotus Elise
            and Jaguar E-Type, inspired by their &apos;less is more&apos;
            principle. We combine this rich heritage with advanced electric
            technology to create a 21st-century sports car, hand-built in the
            heart of Great Britain.
          </p>
        </div>

        {/* Row 2 col 4 — empty */}
        <div className={spacer} aria-hidden="true" />
      </div>
    </section>
  )
}
