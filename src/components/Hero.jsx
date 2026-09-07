import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import heroVideo from '../assets/heroSection/porsche-hero-bg-video.mp4'

export default function Hero() {
  const titleRef = useRef(null)
  const panelRef = useRef(null)
  const [videoOk, setVideoOk] = useState(true)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, { xPercent: -160, opacity: 0 })
      gsap.set(panelRef.current, { y: 48, opacity: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.to(titleRef.current, {
        xPercent: -50,
        opacity: 1,
        duration: 1.75,
      }).to(
        panelRef.current,
        { y: 0, opacity: 1, duration: 1.05 },
        '-=0.85',
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="relative h-svh w-full overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0">
        {videoOk ? (
          <video
            className="w-full h-full object-cover"
            src={heroVideo}
            autoPlay
            muted
            loop
            playsInline
            poster="/speedster.jpg"
            onError={() => setVideoOk(false)}
          />
        ) : (
          <div
            className="w-full h-full object-cover bg-[radial-gradient(ellipse_at_40%_60%,#b8b8b8_0%,transparent_55%),linear-gradient(160deg,#d0d0d0_0%,#8e8e8e_100%)]"
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.28)_0%,transparent_45%),linear-gradient(0deg,rgba(0,0,0,0.35)_0%,transparent_40%)] pointer-events-none" />
      </div>

      <h1
        ref={titleRef}
        className="absolute z-[2] left-1/2 bottom-[12%] m-0 font-display text-[clamp(5.5rem,18vw,14rem)] leading-[0.85] tracking-[-0.02em] text-white uppercase w-max max-w-[92vw] [text-shadow:0_2px_40px_rgba(0,0,0,0.25)] pointer-events-none will-change-[transform,opacity] max-[900px]:bottom-[38%] max-[900px]:text-[clamp(4.5rem,22vw,8rem)]"
      >
        PORSCHE
      </h1>

      <aside
        ref={panelRef}
        className="absolute z-[3] right-[4vw] bottom-14 w-[min(340px,calc(100%-2rem))] py-6 px-[1.35rem] pb-[1.6rem] bg-frost backdrop-blur-[22px] border border-white/10 text-white max-[900px]:right-5 max-[900px]:left-5 max-[900px]:bottom-6 max-[900px]:w-auto"
      >
        <p className="flex gap-[0.85rem] m-0 mb-4 text-[0.62rem] tracking-[0.18em] opacity-70">
          <span>.PORSCHE</span>
          <span>.911</span>
        </p>
        <h2 className="m-0 mb-[1.1rem] font-serif text-[clamp(1.45rem,2.2vw,1.85rem)] font-medium leading-[1.2] tracking-[0.01em]">
          Be moved — <em className="italic font-medium">At The Speed Of Lightness</em>
        </h2>
        <p className="m-0 text-[0.62rem] font-medium leading-[1.65] tracking-[0.12em] uppercase opacity-[0.88]">
          EVERY SURFACE IS SHAPED FOR PURPOSE. PRECISION ENGINEERING MEETS
          TIMELESS FORM — FROM THE ICONIC SILHOUETTE TO THE DETAILS YOU FEEL AT
          EVERY CORNER. BUILT TO MOVE YOU.
        </p>
      </aside>
    </section>
  )
}
