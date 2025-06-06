import { ChevronDown } from 'lucide-react'
import MyAreaChart from './MyAreaChart';

export default function PerformanceReport() {
    const data = [
        { day: "Monday", value: 50 },
        { day: "Tuesday", value: 30 },
        { day: "Wednesday", value: 80 },
        { day: "Thursday", value: 70 },
        { day: "Friday", value: 60 },
        { day: "Saturday", value: 40 },
        { day: "Sunday", value: 70 },
    ];
  return (
    <div className='my-4 p-4 border border-border/30 rounded-lg shadow-md bg-white'>
      <div className='flex justify-between mb-4'>
        <h2 className='font-semibold text-xl'>Performance Report</h2>
        <button className={`flex items-center justify-center border border-border/30 rounded-full px-2 py-1`}>
            Weekly
            <ChevronDown />
        </button>
      </div>

      <MyAreaChart data={data} />
    </div>
  )
}
