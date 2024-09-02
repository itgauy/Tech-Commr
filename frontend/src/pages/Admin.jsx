import React from 'react'

const Admin = () => {
  return (
    <main className='relative h-screen'>
      <div className='absolute border bg-green-300 border-green-500 w-full'>
        Tech-Commr admin
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 h-full'>
        <div className='lg:h-full h-[70vh] bg-orange-300 border border-red-500'></div>
        <div className='lg:h-full h-[70vh] bg-orange-300 border border-red-500'></div>
      </div>
    </main>
  )
}

export default Admin
