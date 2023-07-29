type CarouselItemProp = {
  children: JSX.Element
  marginX: number | "auto"
  type: string
  index: number
}

const CarouselItem = ({children, marginX, type, index}: CarouselItemProp) => {
  return (
    <div className={`box-content flex flex-none snap-center mx-${marginX}`} id={`${type}-${index.toString()}`} >
      {children}
    </div>
  )
}
export default CarouselItem