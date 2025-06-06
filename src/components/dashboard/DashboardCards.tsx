import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function DashboardCards() {
  const CustomCard = "border border-border/30 rounded-lg bg-white shadow-md";

  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-2'>
      {/* Employees */}
      <div className={`w-64 px-3 py-2 ${CustomCard}`}>
        <div className='flex items-center justify-between'>
          <p className='font-medium text-xl'>Employees</p>
          <span className='bg-[#EED3EF] rounded-full w-8 h-8 flex items-center justify-center'><img src={'/employees-icon.svg'} loading="lazy" /></span>
        </div>

        <div className='text-2xl font-semibold pb-2'>
          {24}
        </div>

        <button className='w-full flex justify-between items-center mt-2 pt-2 border-t border-border/30 text-[#21729F]'>
          <p>View Details</p>
          <ArrowRight/>
        </button>
      </div>

      {/* Hiring */}
      <div className={`w-64 px-3 py-2 ${CustomCard}`}>
        <div className='flex items-center justify-between'>
          <p className='font-medium text-xl'>Hiring</p>
          <span className='bg-[#D3E3EF] rounded-full w-8 h-8 flex items-center justify-center'><img src={'/hiring-icon.svg'} loading="lazy" /></span>
        </div>

        <div className='text-2xl font-semibold pb-2'>
          {5}
        </div>

        <button className='w-full flex justify-between items-center mt-2 pt-2 border-t border-border/30 text-[#21729F]'>
          <p>View Details</p>
          <ArrowRight/>
        </button>
      </div>

      {/* Projects */}
      <div className={`w-64 px-3 py-2 ${CustomCard}`}>
        <div className='flex items-center justify-between'>
          <p className='font-medium text-xl'>Projects</p>
          <span className='bg-[#E3EFD3] rounded-full w-8 h-8 flex items-center justify-center'><img src={'/project-icon.svg'} loading="lazy" /></span>
        </div>

        <div className='text-2xl font-semibold pb-2'>
          {1}
        </div>

        <button className='w-full flex justify-between items-center mt-2 pt-2 border-t border-border/30 text-[#21729F]'>
          <p>View Details</p>
          <ArrowRight/>
        </button>
      </div>
      
    </div>
  )
}
