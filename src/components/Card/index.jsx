

export default function Card({cardNumber, cardName, expired }) {
  return (
    <div className='relative w-72 h-48 rounded-2xl bg-indigo-800'>
        <h6 className = 'absolute mt-3 ml-2 text-white font-bold'>{cardNumber}</h6>
        <div className='absolute w-72 bottom-0 rounded-b-2xl bg-teal-500 '>
            <p className ='mt-3 ml-2 text-white font-bold'> {cardName}</p>
            <p className ='mt-5 ml-2 text-white'> {expired}</p>
        </div>
    </div>
  )
}
