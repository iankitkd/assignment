import React from 'react'

type Action = {
    start: string;
    end: string;
    category: string;
    title: string;
}
interface ActionCardProps {
    action: Action;
}

export default function ActionCard({action}: ActionCardProps) {
  return (
    <div className='flex gap-2 py-2 border-b border-border/40'>
      <div className='border-r border-border/30 min-w-[80px]'>
        <p className='text-lg font-medium'>{action.start}</p>
        <p className='text-sm font-light'>{action.end}</p>
      </div>

      <div>
        <p className='text-gray-500'>{action.category}</p>
        <p className='text-lg font-medium'>{action.title}</p>
      </div>
    </div>
  )
}
