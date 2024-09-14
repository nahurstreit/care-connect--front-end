interface ItemTrailProps {
    bgColor: string
    text: string
    icon: string
    textColor?: string
  }
  
  export default function ItemTrail({ bgColor, text, icon, textColor=`rgba(49, 58, 67, 1)`}: ItemTrailProps) {
    return (
      <div
        className='rounded-[8px] flex flex-col items-center justify-start w-auto py-4 px-4 gap-2'
        style={{ backgroundColor: bgColor, minHeight: '117px' }}
      >
        <span 
            className='text-center w-full block'
            style={{fontWeight: '500', fontSize: '14px', color: textColor}}
        >
          {text}
        </span>
        <img
            src={`${icon}`} 
            alt={text}
        />
      </div>
    )
  }
  