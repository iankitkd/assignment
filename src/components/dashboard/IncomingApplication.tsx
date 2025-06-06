import { SlidersHorizontal } from 'lucide-react';
import React from 'react'
import ApplicationCard from './ApplicationCard';
import { applications } from '@/data/applications';

export default function IncomingApplication() {
  const CustomBorder = "border border-border/50 rounded-xl";
  const BGGradient = "bg-gradient-to-r from-left-color to-right-color text-white";

  return (
    <div className={`p-4 mt-8 ${CustomBorder}`}>
      <div className='flex justify-between items-start'>
        <div>
          <h2 className='font-semibold text-xl'>Incoming Application</h2>
          <p>Manage application for your job posting</p>
        </div>
        <div className='flex gap-2'>
          <button className={`flex items-center justify-center gap-1 px-4 ${CustomBorder}`}>
            <SlidersHorizontal />
            <span> Filter </span>
          </button>
          <button className={`${BGGradient} px-4 py-1 rounded-xl`}>See all</button>
        </div>
      </div>

      <div className='flex flex-wrap gap-4 py-4'>
        {applications.map((applicant, i) => (
            <ApplicationCard key={i} applicant={applicant} />
        ))}
      </div>
    </div>
  )
}
