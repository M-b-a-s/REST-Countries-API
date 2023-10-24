import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <div className='my-16'>
        <form className='flex items-center gap-6 bg-slate-800 shadow-lg p-1 text-white px-7 py-2 rounded'>
            <BsSearch />
            <input type="search" placeholder='Search' className='outline-none bg-transparent w-full'/>
        </form>

        <div>
            
        </div>
    </div>
  )
}

export default SearchBar