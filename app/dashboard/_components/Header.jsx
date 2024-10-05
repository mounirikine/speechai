import { UserButton } from '@clerk/nextjs'
import { Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='sticky top-0  bg-gray-950 shadow-lg z-[999999999999]'  >
            <nav className="flex items-center justify-between px-3 lg:px-10 py-5  shadow-md ">
            <Link href="/dashboard" className="flex items-center text-lg">
            <img
              width={53}
              src="https://cdn.prod.website-files.com/66d87bb582928970cd067300/66ddde5e2f6ed23bce12b022_Logo-p-500.png"
              alt="Speech AI Logo"
              className="w-12 h-12"
            />
            <span className="text-white">
              Speech <span className="text-purple-600 font-bold">AI</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center w-6/12 px-5 py-1 rounded-full bg-gray-900 ">
            <Search />
            <input type="text" className='text-white  bg-transparent w-11/12 px-5 h-full py-2 outline-none' placeholder='Search...' />
          </div>
                <UserButton  />
            </nav>
    </header>
  )
}

export default Header