import React, { useState } from 'react';
import Counter from "./Components/Counter"

function App() {

  const [plainsCount, setPlainsCount] = useState(0);
  const [islandCount, setIslandCount] = useState(0);
  const [mountainCount, setMountainCount] = useState(0);
  const [forestCount, setForestCount] = useState(0);
  const [swampCount, setSwampCount] = useState(0);

  return (
    <div className="App">
      <div className='container h-screen mx-auto flex items-center'>
        <div className="bg-white w-full flex justify-evenly">

          <Counter className="bg-yellow-300" type="plain" devotion={plainsCount} setter={setPlainsCount}></Counter>
          <Counter className="bg-cyan-500" type="island" devotion={islandCount} setter={setIslandCount}></Counter>
          <Counter className="bg-red-500" type="mountain" devotion={mountainCount} setter={setMountainCount}></Counter>
          <Counter className="bg-green-500" type="forest"devotion={forestCount} setter={setForestCount}></Counter>
          <Counter className="bg-violet-500" type="swamp" devotion={swampCount} setter={setSwampCount}></Counter>

        </div>
      </div>
    </div>
  )

}

export default App
