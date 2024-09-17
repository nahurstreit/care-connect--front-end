interface PaginationControlProps {
	maxPage: number
	currentPage: number
	dotSize?: number
}

export default function PaginationControl({ maxPage, currentPage, dotSize = 10 }: PaginationControlProps) {
	if (currentPage > maxPage) {
		currentPage = maxPage
	}
	return (
		<div className="flex space-x-2">
			{Array.from({ length: maxPage }).map((_, index) => {
				const isActive = index === currentPage
				return (
					<div
						key={index}
						className={`rounded-full ${isActive ? 'bg-[rgba(197,196,99,1)]' : 'bg-[rgba(242,240,240,1)] border border-[rgba(57,63,70,1)]'}`}
						style={{ width: `${dotSize}px`, height: `${dotSize}px` }}
					/>
				)
			})}
		</div>
	)
}