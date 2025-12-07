import React from 'react'

export default function NavBar({data}) {
  return (
    <div className=' w-full   mt-65  bg-transparent absolute z-20'>
      <div className='flex flex-col sm:flex-row items-center justify-evenly w-4/5 min-h-40 mx-auto py-10 shadow rounded-3xl bg-white'>
        <div className=' flex flex-col justify-center items-center pb-4'>
            <p className=' text-gray-400 font-medium uppercase'>IP ADDRESS</p>
            <h1 className=' text-2xl font-bold'>{data && data.ip}</h1>
            <h1 className=' text-2xl font-bold'>{!data && 'Loading'}</h1>
        </div>
        <div className=' h-0 sm:min-h-24 sm:bg-gray-300  w-[0.3px]'>
        </div>
         <div className=' flex flex-col justify-center items-center pb-4'>
            <p className=' text-gray-400 font-medium uppercase'>location</p>
            <h1 className=' text-2xl font-bold'>{data && data.location.region}</h1>
            <h1 className=' text-2xl font-bold'>{!data && 'Loading'}</h1>
        </div>
        <div className=' h-0 sm:min-h-24 sm:bg-gray-300  w-[0.3px]'>
        </div>
         <div className=' flex flex-col justify-center items-center pb-4'>
            <p className=' text-gray-400 font-medium uppercase'>time zone</p>
            <h1 className=' text-2xl font-bold'>{data && data.location.timezone}</h1>
            <h1 className=' text-2xl font-bold'>{!data && 'Loading'}</h1>
        </div>
        <div className=' h-0 sm:min-h-24 sm:bg-gray-300  w-[0.3px]'>
        </div>
         <div className=' flex flex-col justify-center items-center pb-4'>
            <p className=' text-gray-400 font-medium uppercase'>isp</p>
            <h1 className=' text-2xl font-bold'>{data && data.isp}</h1>
            <h1 className=' text-2xl font-bold'>{!data && 'Loading'}</h1>
        </div>
        
      </div>
      
    </div>
  )
}
