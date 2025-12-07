import React from 'react'

export default function NavBar({data}) {
  return (
    <div className=' w-full   mt-65  bg-transparent absolute z-20'>
      <div className=' flex justify-evenly w-4/5 min-h-40 mx-auto py-10 shadow rounded-3xl bg-white'>
        <div>
            <p className=' text-gray-400 font-medium pb-2 uppercase'>IP ADDRESS</p>
            <h1 className=' text-2xl font-bold'>{data && data.ip}</h1>
            <h1 className=' text-2xl font-bold'>{!data && 'Loading'}</h1>
        </div>
        <div className=' bg-gray-300  w-[0.2px]'>
        </div>
         <div>
            <p className=' text-gray-400 font-medium pb-2 uppercase'>location</p>
            <h1 className=' text-2xl font-bold'>{data && data.location.region}</h1>
            <h1 className=' text-2xl font-bold'>{!data && 'Loading'}</h1>
        </div>
        <div className=' bg-gray-300  w-[0.2px]'>
        </div>
         <div>
            <p className=' text-gray-400 font-medium pb-2 uppercase'>time zone</p>
            <h1 className=' text-2xl font-bold'>{data && data.location.timezone}</h1>
            <h1 className=' text-2xl font-bold'>{!data && 'Loading'}</h1>
        </div>
        <div className=' bg-gray-300  w-[0.2px]'>
        </div>
         <div>
            <p className=' text-gray-400 font-medium pb-2 uppercase'>isp</p>
            <h1 className=' text-2xl font-bold'>{data && data.isp}</h1>
            <h1 className=' text-2xl font-bold'>{!data && 'Loading'}</h1>
        </div>
        
      </div>
      
    </div>
  )
}
