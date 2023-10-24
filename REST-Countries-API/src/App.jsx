import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Countries from './components/Countries'

const App = () => {
  return (
    <div className='bg-slate-900 p-4 relative'>
      <Navbar />
      <SearchBar />
      <Countries />
    </div>
  )
}

export default App