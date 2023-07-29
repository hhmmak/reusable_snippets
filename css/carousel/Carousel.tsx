import { SyntheticEvent, useRef, useEffect, useState } from "react";

type CarouselProp = {
  children: JSX.Element | JSX.Element[]
  count: number
  type: string
  widthClass?: string
  delay?: number
  interval?: number
}

const Carousel = ({children, count, type, widthClass="w-screen", delay=0, interval=5000}: CarouselProp) => {


  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [delayed, setDelayed] = useState(false)
  const [isInView, setIsInView] = useState(false)

  const repeatComponent = (count: number, component: (index: number) => JSX.Element) => {
    const element : JSX.Element[] = Array.from(new Array(count), (_) => <></>)
    return element.map((_, index) => component(index))
  }

  // for switching views
  const carouselSwitch = (e: SyntheticEvent, targetId: string) => {
    e.preventDefault();
    if (carouselRef.current) {
      carouselRef.current.querySelector(`#${type}-${targetId}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" })
      setActiveIdx(parseInt(targetId))
    }
  };
  
  // for checking if carousel is in view to begin animation
  const handleVisibilityChange = () => {
    if (carouselRef.current) {
      const { top, bottom } = carouselRef.current.getBoundingClientRect()
      setIsInView((top >= 50 && bottom <= (window.innerHeight - 0)))
    }
  }

  // add event listener to check if carousel is in view
  useEffect(() => {
    window.addEventListener('scroll', handleVisibilityChange)

    return () => {
      window.removeEventListener('scroll', handleVisibilityChange)
    }
  }, [])

  // delay animation by setInterval if requested by prop
  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setDelayed(true)
    }, delay);
    

    return () => {
      clearTimeout(delayTimeout)
    };
  }, [delay])
  
  // animation of carousel, activate only when carousel is in view and delay by setTimeout is done
  useEffect(() => {
    if (delayed && isInView) {
      let newIdx = 0
      const switchInterval = setInterval(() => {
        if (count - 1 > activeIdx) {
          newIdx = activeIdx + 1
        }
        if (carouselRef.current) {
          carouselRef.current.querySelector(`#${type}-${newIdx}`)?.scrollIntoView({ behavior: "smooth", block: "nearest" })
          setActiveIdx(newIdx)
        }
      }, interval)

      return () => {
        if (switchInterval) {
          clearInterval(switchInterval)
        }
      }
    }
  }, [activeIdx, count, carouselRef, delayed, type, interval, isInView])

  return (
    <div>
      {/* Carousel */}
      <div ref={carouselRef} className={`inline-flex overflow-x-scroll snap-x snap-mandatory scroll-smooth snap-center ${widthClass}`}> // require tailwind config as commented below
        {children}
      </div>
      {/* Carousel Navigation */}
      <div className="w-full mx-auto mb-4 flex justify-center items-center gap-3">
      {repeatComponent(count, (index) =>
        <a href={`#${type}-${index.toString()}`}
          onClick={(e) => carouselSwitch(e, index.toString())}
          className={`rounded-full border w-3 h-3 ${
            activeIdx === index
            ? "bg-blue-500 border-blue-500 scale-150"
            : "bg-white border-white"
          }`}
          key={`carousel-${type}-${index}`}
        />
      )}
      </div>
    </div>
  )
}
export default Carousel

// tailwind.config.css
// --------------------
// /* Hide scrollbar for Chrome, Safari and Opera */
// .no-scrollbar::-webkit-scrollbar {
//   display: none;
// }
// /* Hide scrollbar for IE, Edge and Firefox */
// .no-scrollbar {
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
// }
