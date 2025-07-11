import React from 'react'

function Searchbar({ value, onChange, onSearch }) {
  return (
    <div className="flex items-center mt-10 justify-center">
      <input
        className='border-2 border-gray-300 bg-white h-10 px-4 rounded-lg text-sm focus:outline-none'
        type='search'
        placeholder='Search a place...'
        value={value}
        onChange={onChange}
        onKeyDown={e => { if (e.key === 'Enter') onSearch(); }}
      />
      <button
        className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  )
}

export default Searchbar
