import React, { useState } from 'react'
import useFetch from "../GetData";

export default function SearchBar({api, onSendBack}) {
    const [searchValue, setSearchValue] = useState('')
    
    const sendToApp = () => {
      if(searchValue !==''){
        onSendBack(searchValue); // send data back
      }
    
  };
    
  return (
    <div className=' w-full flex justify-center'>
        <input type="text" 
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Search for any address IP or domain' 
        className=' text-xl bg-white w-1/3  py-3 px-8 rounded-l-xl outline-none' />
        <button onClick={() => sendToApp()} 
        className=' bg-black text-white p-4 rounded-r-xl'>
            Search
        </button>
        
           
            
    </div>
  )
}
