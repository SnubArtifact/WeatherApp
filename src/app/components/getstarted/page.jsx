"use client"
import Link from 'next/link'
import React from 'react'

function GetStarted() {
  return (
    <div>
      <Link className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-60 mx-150 flex justify-center width-full rounded' href="/components/dashboard">Get Started</Link >
    </div>
  )
}

export default GetStarted
