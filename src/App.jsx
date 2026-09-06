import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-black">
      <div className="h-[40vh] w-[45vw] rounded-xl bg-slate-900 border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.6)] flex flex-col justify-center items-center gap-5">
        
        <h1 className="text-cyan-400 text-2xl font-bold tracking-widest uppercase">
          React Learning Lab
        </h1>
        <h2 className="text-cyan-200 text-sm tracking-wide">By Dipesh</h2>

        <h2 className="text-white text-4xl font-mono">
          Count : <span className="text-cyan-400">{count}</span>
        </h2>

        <div className="flex gap-4">
          <button
            className="h-16 w-16 rounded-full border-2 border-cyan-400 text-cyan-400 text-xl font-bold hover:bg-cyan-400 hover:text-black transition-all duration-200 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <button
            className="h-16 w-16 rounded-full border-2 border-cyan-400 text-cyan-400 text-xl font-bold hover:bg-cyan-400 hover:text-black transition-all duration-200 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <button
            className="h-16 w-16 rounded-full border-2 border-purple-400 text-purple-400 text-sm font-bold hover:bg-purple-400 hover:text-black transition-all duration-200 shadow-[0_0_10px_rgba(192,132,252,0.5)]"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

      </div>
    </div>
  )
}

export default App