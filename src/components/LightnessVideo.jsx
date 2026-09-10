import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import video from '../assets/7th-section.mp4'

gsap.registerPlugin(ScrollTrigger)

export default function LightnessVideo() {
  const sectionRef = useRef(null)
  const frameRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const frame = frameRef.current
    const vid = videoRef.current
    if (!section || !frame) return

    const tryPlay = () => {
      if (!vid) return
      vid.muted = true
      void vid.play().catch(() => {})
    }

    tryPlay()

    const mq = window.matchMedia('(max-width: 767px)')

    const applyAnim = () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) st.kill()
      })
      gsap.killTweensOf(frame)

      if (mq.matches) {
        gsap.set(frame, { width: '100%' })
        return
      }

      gsap.fromTo(
        frame,
        { width: '50%' },
        {
          width: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=100%',
            pin: true,
            scrub: true,
            anticipatePin: 1,
            onEnter: tryPlay,
            onEnterBack: tryPlay,
          },
        },
      )
    }

    const ctx = gsap.context(() => {
      applyAnim()
    }, section)

    mq.addEventListener('change', applyAnim)

    return () => {
      mq.removeEventListener('change', applyAnim)
      ctx.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-svh w-full overflow-hidden bg-black"
      id="lightness-video"
    >
      {/* 4-col alignment on desktop; full-bleed on mobile */}
      <div
        ref={frameRef}
        className="absolute top-0 left-1/2 z-[2] h-full w-full md:w-1/2 -translate-x-1/2 overflow-hidden"
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={video}
          autoPlay
          muted
          playsInline
          loop
        />
      </div>
    </section>
  )
}
