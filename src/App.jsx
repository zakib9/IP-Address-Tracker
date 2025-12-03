import { useState } from "react";
import NavBar from "./componants/NavBar";
import SearchBar from "./componants/SearchBar";
import useFetch from "./GetData";

    // src/App.jsx
    function App() {
      const apiUrl = "https://geo.ipify.org/api/v2/country?apiKey=at_kMtGl3Chdg6Hw9kIkL5l5Ppdn0Dbv";
      const [address , setAddress] = useState(apiUrl)
      const handleAddress = (addr) => {
          setAddress(address + '&' + addr)
          console.log(address)
      }
      const { error, isPending, data} = useFetch(address)
      return (
        <div className=" relative min-h-screen flex-col items-center justify-center bg-gray-100">
            <NavBar />
            <header 
            className=" w-full 
                        min-h-86 
                        bg-[url('./assets/pattern-bg-desktop.png')] 
                        bg-cover bg-center">
              <h1 className=" text-white text-4xl text-center font-semibold p-10">
                IP Address Tracker
                </h1>
                <SearchBar sendAddress={handleAddress}/>
            </header>
            <div className=" justify-center pt-52">
                { error && <div>{ error }</div> }
                { isPending && <div>Loading...</div> }
                { data && JSON.stringify(data) }
              <p>{address}</p>
            </div>
            
        </div>
      );
    }

    export default App;