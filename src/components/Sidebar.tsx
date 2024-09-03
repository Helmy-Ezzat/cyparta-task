'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    if (isOpen) setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4  z-50 text-white bg-gray-800 p-2 rounded-md"
      >
        <Image
          src="/icons/menu.svg"
          width={24}
          height={24}
          alt="Open Sidebar"
        />
      </button>

      <aside
        className={`fixed top-0 left-0  w-full h-full bg-gray-900 bg-opacity-75 z-40 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-72 md:h-screen md:mr-4  md:bg-opacity-100 md:z-0`}
      >
        <div className="relative  w-full h-full md:w-72 md:h-screen p-8 bg-white">
         
          <button
            onClick={toggleSidebar}
            className="md:hidden absolute top-4 right-4 text-gray-800 bg-gray-200 p-2 rounded-md"
          >
            <Image
              src="/icons/close.svg"
              width={24}
              height={24}
              alt="Close Sidebar"
            />
          </button>

          
          <Link
            href={'/'}
            className="flex justify-center mb-10"
            onClick={closeSidebar}
          >
            <Image
              src="/logo.png"
              width={247}
              height={158}
              alt="Cyparta Logo"
            />
          </Link>

         
          <nav className="flex flex-col space-y-6">
            <Link
              href="#"
              className="flex items-center space-x-3 text-gray-900 hover:text-red-500"
              onClick={closeSidebar}
            >
              <Image
                src="/icons/akar-icons_dashboard.svg"
                width={26}
                height={26}
                className="rounded-md"
                alt="Dashboard"
              />
              <span>Dashboard</span>
            </Link>

            <div className="flex flex-col">
              <button
                onClick={toggleSidebar}
                className="flex items-center space-x-3 text-red-500 bg-red-100 rounded-xl p-2"
              >
                <Image
                  src="/icons/clarity_employee-group-line.svg"
                  width={24}
                  height={24}
                  className="rounded-md"
                  alt="Employees"
                />
                <span>Employees</span>
                <Image
                  src="/icons/icon-park-outline_down.svg"
                  width={26}
                  height={26}
                  className="rounded-md"
                  alt="Dropdown Icon"
                />
              </button>
              {isOpen && (
                <div className="ml-10 mt-2 flex flex-col space-y-2">
                  <Link
                    href="/profile"
                    className="flex items-center space-x-3 text-gray-600 hover:text-red-500"
                    onClick={closeSidebar}
                  >
                    <Image
                      src="/icons/user.svg"
                      width={26}
                      height={26}
                      className="rounded-md"
                      alt="Profile"
                    />
                    <span>Profile</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center space-x-3 text-gray-600 hover:text-red-500"
                    onClick={closeSidebar}
                  >
                    <Image
                      src="/icons/calendar-check.svg"
                      width={26}
                      height={26}
                      className="rounded-md"
                      alt="Attendance"
                    />
                    <span>Attendance</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center space-x-3 text-gray-600 hover:text-red-500"
                    onClick={closeSidebar}
                  >
                    <Image
                      src="/icons/file 01.svg"
                      width={24}
                      height={24}
                      className="rounded-md"
                      alt="Tasks"
                    />
                    <span>Tasks</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="#"
              className="flex items-center space-x-3 text-gray-900 hover:text-red-500"
              onClick={closeSidebar}
            >
              <Image
                src="/icons/coin-dollar.svg"
                width={24}
                height={24}
                className="rounded-md"
                alt="Payroll"
              />
              <span>Payroll</span>
            </Link>

            <Link
              href="#"
              className="flex items-center space-x-3 text-gray-900 hover:text-red-500"
              onClick={closeSidebar}
            >
              <Image
                src="/icons/akar-icons_dashboard.svg"
                width={24}
                height={24}
                className="rounded-md"
                alt="Holidays"
              />
              <span>Holidays</span>
            </Link>

            <Link
              href="#"
              className="flex items-center space-x-3 text-gray-900 hover:text-red-500"
              onClick={closeSidebar}
            >
              <Image
                src="/icons/🦆 icon _wallet_.svg"
                width={24}
                height={24}
                className="rounded-md"
                alt="Advanced Payment"
              />
              <span>Advanced Payment</span>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  )
}
