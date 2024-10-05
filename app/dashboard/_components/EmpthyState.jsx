import Link from 'next/link'
import React from 'react'

const EmpthyState = () => {
  return (
    <div className='p-5  flex items-center flex-col mt-10 border-2  border-dashed py-24'>
        <h2 className='mb-4'>You don't have ant short video to created </h2>
        <Link href={'dashboard/create-new'} className='bg-primary text-white px-5 py-2 rounded-md'>+ Create New short video</Link>

    </div>
  )
}

export default EmpthyState