import React, { useState } from 'react'

export default function SearchBar( {sendAddress}) {
    const [searchValue, setSearchValue] = useState("")
    function handlClick(){
        sendAddress(searchValue)
    }
    
  return (
    <div className=' w-full flex justify-center'>
        <input type="text" 
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Search for any address IP or domain' 
        className=' text-xl bg-white w-1/3  py-3 px-8 rounded-l-xl outline-none' />
        <button onClick={(e) => handlClick(e)} 
        className=' bg-black text-white p-4 rounded-r-xl'>
            Search
            </button>
            
    </div>
  )
}
