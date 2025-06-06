"use client"
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

type Data = {
    day: string,
    value: number,
}
interface MyAreaChartProps {
    data: Data[]
}
export default function MyAreaChart({data}: MyAreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#9CBCF8" stopOpacity={100}/>
                    <stop offset="95%" stopColor="#FFFFFF" stopOpacity={30}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="day" />
            <YAxis domain={[0, 90]} ticks={[10, 20, 30, 40, 50, 60, 70, 80]}  />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#9CBCF8" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
    </ResponsiveContainer>
  )
}
