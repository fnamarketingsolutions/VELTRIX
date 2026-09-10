import galleryBg from '../assets/heroSection/two-porsche.png'

const cell = 'min-h-0 overflow-hidden border border-white/10 bg-transparent'

export default function Gallery() {
  return (
    <section
      className="relative h-[70svh] md:h-svh w-full overflow-hidden bg-[#888C8F]"
      id="gallery"
    >
      {/* Background image placeholder — drop src later */}
      <img
        src={galleryBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-[1] h-full w-full object-cover"
      />

      <div className="relative z-[2] grid h-full grid-cols-2 md:grid-cols-4 grid-rows-[repeat(2,minmax(0,1fr))]">
        <div className={cell} aria-hidden="true" />
        <div className={cell} aria-hidden="true" />
        <div className={`${cell} max-md:hidden`} aria-hidden="true" />
        <div className={`${cell} max-md:hidden`} aria-hidden="true" />
        <div className={cell} aria-hidden="true" />
        <div className={cell} aria-hidden="true" />
        <div className={`${cell} max-md:hidden`} aria-hidden="true" />
        <div className={`${cell} max-md:hidden`} aria-hidden="true" />
      </div>
    </section>
  )
}
