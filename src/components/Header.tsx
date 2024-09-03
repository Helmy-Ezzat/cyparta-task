'use client'
import { useAuthStore } from '@/store/authStore'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const user = useAuthStore((state) => state.accessToken)
  return (
    <div className="flex flex-row-reverse items-center gap-9 mt-9 mr-14">
      {user ? (
        <>
          <div className="flex items-center">
            <Image
              src="/helmy.jpg"
              width={50}
              height={50}
              className="rounded-full"
              alt="User Avatar"
            />
          </div>

          <button className="p-2 rounded-full bg-gray-100">
            <Image
              src={'/icons/notification.svg'}
              alt="notification"
              width={28}
              height={28}
            />
          </button>
        </>
      ) : (
        <Link
          href={'/login'}
          className="px-10 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-200"
        >
          Login
        </Link>
      )}
    </div>
  )
}
