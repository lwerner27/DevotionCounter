import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

const Counter = ({className, devotion, setter}) => (
    <div className="flex flex-col items-center">
        <button className='w-full' onClick={() => setter(devotion + 1)}>
            <PlusCircleIcon className="aspect-square text-blue-500" />
        </button>
        
        <div className={`text-center rounded-full px-7 my-6 font-sans text-9xl text-white ${className}`}>{devotion}</div>
        
        <button className='w-full' onClick={() => setter(devotion - 1)}>
            <MinusCircleIcon className="aspect-square text-blue-500" />
        </button>
    </div>
)

export default Counter 