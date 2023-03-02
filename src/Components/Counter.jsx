import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

const Counter = ({className, devotion, setter}) => (
    <div className="flex flex-col items-center w-1/6">
        <button className='w-3/4' onClick={() => setter(devotion + 1)}>
            <PlusCircleIcon className="text-blue-500" />
        </button>
        
        <div className={`rounded-full w-10/12 aspect-square my-7 flex items-center justify-center ${className}`}>
            <div className='text-9xl text-white'>{devotion}</div>
        </div>
        
        <button className='w-3/4' onClick={() => decrementHelper(devotion, setter)}>
            <MinusCircleIcon className="text-blue-500" />
        </button>
    </div>
)

function decrementHelper(devotion, setter) {
    if (devotion > 0) {
        setter(devotion - 1)
    }
}

export default Counter 