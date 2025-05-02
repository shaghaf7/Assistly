import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import React from 'react'

function AdminLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div className='flex flex-col flex-1'>
        {/*header*/}
        <Header />
      <div className='flex flex-col lg:flex-row bg-gray-100'>
        {/*slider*/}
        <Sidebar/>
        <div className='flex-1 flex justify-center lg:justify-start items-start max-w-5xl mx-auto w-full'>
            {children}
            </div>
      </div>
    </div>
  )
}

export default AdminLayout
