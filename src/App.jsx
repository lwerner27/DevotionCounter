import React, { useState } from 'react';
import Counter from "./Components/Counter"

function App() {

  const [plainsCount, setPlainsCount] = useState(0);
  const [islandCount, setIslandCount] = useState(0);
  const [mountainCount, setMountainCount] = useState(0);
  const [forrestCount, setForrestCount] = useState(0);
  const [swampCount, setSwampCount] = useState(0);

  return (
    <div className="App">
      <div className='container h-screen mx-auto flex items-center'>
        <div className="bg-white w-full flex justify-evenly">

          <Counter className="bg-yellow-300" devotion={plainsCount} setter={setPlainsCount}></Counter>
          <Counter className="bg-cyan-500" devotion={islandCount} setter={setIslandCount}></Counter>
          <Counter className="bg-red-500" devotion={mountainCount} setter={setMountainCount}></Counter>
          <Counter className="bg-green-500" devotion={forrestCount} setter={setForrestCount}></Counter>
          <Counter className="bg-violet-500" devotion={swampCount} setter={setSwampCount}></Counter>

        </div>
      </div>
    </div>
  )

}

export default App
