import React from 'react'
import GetStarted from '../getstarted/page'

function Landing() {
  return (
    <div>
      <h1 className='text-3xl mt-10 text-center font-bold'>Weather App</h1>
      <h2 className='text-center text-xl mt-10'>To continue, press the Get Started Button</h2>

      <GetStarted/>
    </div>
  )
}

export default Landing
