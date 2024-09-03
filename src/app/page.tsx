'use client'
import Image from 'next/image'

function Home() {

  return (
    <div className='flex justify-center items-center h-screen'>
      <Image src="/logo.png" width={600} height={600} alt="Cyparta Logo" />
    </div>
  )
}

export default Home
