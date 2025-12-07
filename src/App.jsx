import { useState, useEffect } from "react";
import NavBar from "./componants/NavBar";
import SearchBar from "./componants/SearchBar";
import useFetch from "./GetData";
import Map from "./componants/Map";
import "leaflet/dist/leaflet.css";

import mobileBg from "./assets/pattern-bg-mobile.png";
import desktopBg from "./assets/pattern-bg-desktop.png";


    // src/App.jsx
    function App() {
      const BASE_URL = "https://geo.ipify.org/api/v2/country?apiKey=at_kMtGl3Chdg6Hw9kIkL5l5Ppdn0Dbv";
      const [apiUrl, setApiUrl] = useState(BASE_URL);
      const [coords, setCoords] = useState({ lat: 0, lng: 0 });
      const { error, isPending, data} = useFetch(apiUrl)
      const handleFromSearchBar = (value) =>{
          // 👇 rebuild full URL
          console.log( coords.lat, coords.lng)
          const newUrl = `${BASE_URL}&ipAddress=${value}`;
          setApiUrl(newUrl);
          
      }
      const region = data?.location.region ;
      const country = data?.location.country ;

 async function getCoords(region, country) {
  const queries = [
    `${region} ${country}`,
    country // fallback
  ];

  for (let q of queries) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${q}`;

    try {
      console.log("Trying geocode:", q);

      await new Promise(res => setTimeout(res, 800)); // avoid rate limit

      const res = await fetch(url, {
        headers: { "User-Agent": "React-IP-Tracker" }
      });

      if (!res.ok) throw new Error("Geocoder error");

      const geo = await res.json();
      if (geo.length > 0) {
        return {
          lat: parseFloat(geo[0].lat),
          lng: parseFloat(geo[0].lon),
        };
      }
    } catch (err) {
      console.warn("Geocode failed for:", q, err);
    }
  }

  return null; // all attempts failed
}

useEffect(() => {
  if (!data) return;

  const region = data.location.region;
  const country = data.location.country;

  getCoords(region, country).then(coords => {
    if (coords) {
      setCoords(coords);
    } else {
      console.log("No coords found, using fallback default");
      setCoords({ lat: 37.0902, lng: -95.7129 }); // USA fallback
    }
  });

}, [data]);
          
       
      return (
        <div className=" relative min-h-screen flex-col items-center justify-center bg-gray-100">
            <NavBar data= {data} />
            <header className="w-full min-h-86 bg-cover bg-center relative">
  
                    {/* Mobile background */}
                    <div
                      className="absolute inset-0 sm:hidden"
                      style={{
                        backgroundImage: `url(${mobileBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />

                    {/* Desktop background */}
                    <div
                      className="absolute inset-0 hidden sm:block"
                      style={{
                        backgroundImage: `url(${desktopBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className=" absolute w-full h-full">
                      <h1 className=" text-white text-4xl text-center font-semibold p-10">
                IP Address Tracker
                </h1>
                <SearchBar 
                api = {apiUrl}
                 onSendBack={handleFromSearchBar}
                />
                    </div>
              
            </header>
            <div className=" w-full min-h-screen justify-center ">
              {coords.lat === 0 && (
                  <div className="flex justify-center mt-50">
                  <div className="h-8 w-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              {coords.lat !== 0 && <Map 
                    lat={coords.lat}
                    lng={coords.lng}
                  /> }
              
               
                  {/* <p>{ data && JSON.stringify(data) }</p> */}
                
            </div>
            
        </div>
      );
    }

    export default App;