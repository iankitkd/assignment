import { people } from '@/data/people'
import { ChevronDown, ChevronRight, Search, SlidersHorizontal, Upload } from 'lucide-react';

export default function page() {
  const filteredPeople = people;

  const CustomBorder = "border border-border/50 rounded-xl";
  const BGGradient = "bg-gradient-to-r from-left-color to-right-color text-white";

  return (
    <div className='flex flex-col gap-2'>

      <div className='flex justify-between mb-2'>
        <h1 className='font-semibold text-xl'>List of People</h1>
        <button className={`${BGGradient} px-4 py-1 rounded-lg`}>Add new member</button>
      </div>

      <div className='flex justify-between mb-4 overflow-x-auto'>
        <div className='flex gap-2'>
          <div className={`relative p-1 bg-white ${CustomBorder}`}>
            <Search className='absolute left-0 top-1 p-1' />
            <input type="text" placeholder='Search' className='max-w-[200px] ml-6 border-0 outline-0 ring-0' />
          </div>
          <div className={`flex items-center justify-center px-4 ${CustomBorder}`}>
            Type
            <ChevronDown />
          </div>
          <div className={`flex items-center justify-center px-4 ${CustomBorder}`}>
            Role
            <ChevronDown />
          </div>
          <div className={`flex items-center justify-center gap-1 px-4 min-w-[200px] ${CustomBorder}`}>
            <SlidersHorizontal />
            <span> Advanced filter </span>
            <ChevronDown />
          </div>
        </div>

        <div className={`flex items-center justify-center px-4`}>
          Export
          <Upload />
        </div>
      </div>

      <div className='rounded-xl border border-border/50 shadow-2xl overflow-x-auto'>
        <table className="w-full text-left">
            <thead className=''>
              <tr className="bg-[#F4F4F4] text-[#3A3A3A]">
                <th className="p-3"></th>
                <th className="p-3">Name</th>
                <th className="p-3">Job Title</th>
                <th className="p-3">Department</th>
                <th className="p-3">Salary</th>
                <th className="p-3">Start Date</th>
                <th className="p-3">Life Cycle</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredPeople.map((person, i) => (
                <tr key={i} className="border-b border-border/20 hover:bg-gray-50">
                  <td className="p-3"><input type="checkbox" /></td>
                  <td className="p-3">
                    <div className="font-semibold">{person.name}</div>
                    <div className="text-sm text-gray-500">{person.email}</div>
                  </td>
                  <td className="p-3">{person.job}</td>
                  <td className="p-3">{person.dept}</td>
                  <td className="p-3">{person.salary}</td>
                  <td className="p-3 min-w-[120px]">{person.start}</td>
                  <td className="p-3">{person.lifeCycle}</td>
                  <td className="p-3">
                    <div className={`${person.status === 'Active' ? "text-green-800 bg-green-300" : "text-red-800 bg-red-300"} rounded-full text-center p-1`} >
                      {person.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>

      <div className="flex justify-end gap-2 mt-8">
        {[1,2,3,4].map(page => (
          <button key={page} className={`${page === 1 && BGGradient} w-8 h-8 border border-left-color`}>{page}</button>
        ))}
        <button className={`${BGGradient} w-8 h-8  flex items-center justify-center`}><ChevronRight size={24} color='white'/></button>
      </div>
    </div>
  )
}
