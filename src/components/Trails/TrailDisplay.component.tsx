import ItemTrail from './ItemTrail.component'

interface TrailDisplayProps {
    trailLimit?: number
}

export default function TrailDisplay({trailLimit=10}: TrailDisplayProps) {
    const items = Array.from({ length: trailLimit})
    return (
        <div className='flex flex-wrap gap-4 justify-center'>
            {items.map((trail, index) => (
                <div key={index} className='min-w-[calc(50%-8px)]'>
                    <ItemTrail
                        bgColor={`rgba(191, 167, 50, 1)`}
                        text={`Estética`}
                        icon={`${index%2 == 0? `icons/navbar/joystick.svg`: `estetica.svg`}`}
                        textColor='rgba(68, 57, 0, 1)'
                    />
                </div>
            ))}
        </div>
    )
}
