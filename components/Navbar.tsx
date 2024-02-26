'use client'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Link from 'next/link'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import { menuItems } from '@/constants'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()

  const [isClick, setIsClick] = useState(false)
  const toggleNavbar = () => {
    setIsClick(!isClick)
  }
  return (
    <>
      <header className=" bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 ">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src={'/logo.svg'}
                  alt="logo"
                  width={118}
                  height={18}
                  className="object-contain bg-slate-50"
                />
                {/* <a href="/" className=" text-white">
                  logo
                </a> */}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="ml-4 flex items-center space-x-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    className={
                      'text-gray-400 text-[15px] p-2 ' +
                      (pathname === item.path
                        ? 'bg-white  text-gray-900 rounded-xl'
                        : '')
                    }
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className=" lg:hidden flex items-center">
              <button
                className=" inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <RxCross1 size={25} color="white" />
                ) : (
                  <RxHamburgerMenu size={25} color="white" />
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  className={
                    'text-black block p-2 ' +
                    (pathname === item.path
                      ? 'bg-white text-slate-700 rounded-xl'
                      : '')
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Navbar
