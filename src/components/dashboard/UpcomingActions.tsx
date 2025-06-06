import { actions } from '@/data/actions'
import { CalendarArrowUp } from 'lucide-react'
import React from 'react'
import ActionCard from './ActionCard'

export default function UpcomingActions() {
  return (
    <div className='w-90 border border-border/30 shadow-md bg-white p-3'>
      <div className='flex justify-between items-center w-full'>
        <h2 className='text-xl font-semibold'>Upcoming Actions</h2>
        <CalendarArrowUp/>
      </div>

      {
        actions.map((action, i) => (
            <ActionCard key={i} action={action} />
        ))
      }
    </div>
  )
}