'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import EditProfileModal from '@/components/EditProfileModal'
import { personalInfo, tabs } from '@/constants'

interface UserProfile {
  id: number
  name: string
  first_name: string
  last_name: string
  email: string
  phone: string | null
  bio: string | null
  image: string
  cover: string
}

export default function Profile({ userProfile }: { userProfile: UserProfile }) {
  const [userProfileData, setUserProfileData] = useState<UserProfile | null>(
    null
  )
  const [error, setError] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleSaveProfile = async (updatedProfile: Partial<UserProfile>) => {
    console.log('Profile updated:', updatedProfile)
    handleCloseModal()
  }




  return (
    <div className="pt-10 pb-8 px-4 lg:px-0">
      <div className="w-full lg:w-5/6 flex flex-col lg:flex-row items-center border-b pb-4 border-gray-200">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Image
            src={userProfileData?.image || '/helmy.jpg'}
            width={100}
            height={100}
            className="rounded-md"
            alt="Helmy Ezzat"
          />
          <div className="flex flex-col justify-between text-center sm:text-left">
            <h2 className="text-2xl font-bold">
              {userProfileData?.name}
            </h2>
            <p className="text-gray-600">UX/UI DESIGNER</p>
            <p className="text-gray-600">{userProfileData?.email}</p>
          </div>
        </div>
        <button
          onClick={handleOpenModal}
          className="mt-4 lg:mt-0 lg:ml-auto bg-black text-white px-4 py-2 rounded-xl flex items-center gap-3"
        >
          <Image
            src="/icons/edit.svg"
            width={24}
            height={24}
            className="rounded-md"
            alt="Helmy Ezzat"
          />
          Edit Profile
        </button>
        <EditProfileModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          userProfile={userProfile}
          onSave={handleSaveProfile}
        />
      </div>

      <div className="w-full lg:w-4/6 text-sm mt-8 mb-10 md:border-b md:border-gray-200">
        <nav className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
          {tabs.map((tab, index) => (
            <a
              key={index}
              href={tab.href}
              className={`text-gray-500 hover:text-red-500 flex items-center gap-3 ${
                index === 0 ? 'text-red-500 border-b-2 border-red-500 pb-2' : ''
              }`}
            >
              <Image
                src={tab.icon}
                width={24}
                height={24}
                className="rounded-md"
                alt={tab.label}
              />
              <span>{tab.label}</span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {personalInfo.map((info, index) => (
            <div key={index} className="border-b pb-4 border-gray-200">
              <label className="text-gray-600">{info.label}</label>
              <p>{info.value}</p>
            </div>
          ))}
        </div>
        <div className="self-end">
          <label className="text-red-600 font-bold">Total Salary</label>
          <p className="text-red-600">54000 EGP</p>
        </div>
      </div>
    </div>
  )
}

