interface PaginationControlProps {
    maxPage: number
    currentPage: number
    dotSize?: number
}

export default function PaginationControl({ maxPage, currentPage, dotSize=10 }: PaginationControlProps){
  return (
    <div className="flex space-x-2">
      {Array.from({ length: maxPage }).map((_, index) => {
        const isActive = index === currentPage;
        return (
          <div
            key={index}
            className={`w-[${dotSize}px] h-[${dotSize}px] rounded-full ${isActive ? 'bg-[rgba(197,196,99,1)]' : 'bg-[rgba(242,240,240,1)] border border-[rgba(57,63,70,1)]'}`}
          />
        )
      })}
    </div>
  )
}