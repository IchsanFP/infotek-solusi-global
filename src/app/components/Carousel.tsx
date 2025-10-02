import React, {ReactNode, useCallback} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

interface CarouselProps {
  children: ReactNode
}

function Carousel({children}: CarouselProps) {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', skipSnaps: false }, [Autoplay({delay: 2000, stopOnInteraction: false})])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  return (
    <div className='embla relative w-full overflow-hidden'>
      <div className='' ref={emblaRef}>
        {children}
      </div>
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
      >
        <FaArrowRight />
      </button>
    </div>
  )
}

export default Carousel