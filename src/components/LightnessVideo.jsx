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

    const ctx = gsap.context(() => {
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
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-svh w-full overflow-hidden bg-black"
      id="lightness-video"
    >
      {/* 4-col alignment: black sides implied; video starts as middle two cols */}
      <div
        ref={frameRef}
        className="absolute top-0 left-1/2 z-[2] h-full w-1/2 -translate-x-1/2 overflow-hidden"
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
