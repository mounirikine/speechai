'use client'

import React, { useState } from 'react'
import EmptyState from './_components/EmpthyState'

const Dashboard = () => {
    const [videoList,setVideoList] = useState([])

  return (
    <div className='w-full px-3 lg:px-20 py-10 '>

       


        <div className='flex items-center justify-between  '>
            <h2 className='font-bold  text-white  text-lg: lg:text-4xl   '>Dashboard</h2>
            <button className='bg-primary text-white px-10 py-3 rounded-md '>+ Create New</button>
        </div>

        {
            videoList?.length ==0 && <div>
                <EmptyState />
            </div>
        }
    </div>
  )
}

export default Dashboard