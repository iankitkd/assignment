import { CalendarDays, Zap } from "lucide-react";
import { format } from 'date-fns';
import DashboardCards from "@/components/dashboard/DashboardCards";
import IncomingApplication from "@/components/dashboard/IncomingApplication";
import UpcomingActions from "@/components/dashboard/UpcomingActions";
import PerformanceReport from "@/components/dashboard/PerformanceReport";


export default function page() {
  const fullName = "Nuraj group";
  const CustomCard = "border border-border/50 rounded-lg bg-white shadow-md";

  return (
    <div>
      <div className={`flex items-center justify-start w-full gap-2 p-2 ${CustomCard}`}>
        <Zap className="hidden md:block text-2xl w-7 h-7 rounded-full p-1 bg-left-color text-white "/>
        <p className="font-medium text-lg">Optimize your experience on Gigfloww- track your job post, manage teams and streamline HR OPERATIONS EFFORTLESSLY TODAY!</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center my-8">
        <h1 className="font-bold text-2xl">Welcome Back, {fullName}</h1>
        <div className={`hidden md:flex items-center p-2 gap-2 ${CustomCard}`}>
          <CalendarDays />
          <span className="font-medium">{format(Date.now(), 'EEE d, MMM yyyy')}</span>
        </div>
      </div>

      <div className="flex justify-between gap-6 flex-col md:flex-row">
        <div className="flex-1 space-y-6">
          <DashboardCards />
          <PerformanceReport/>
        </div>
        <div>
          <UpcomingActions/>
        </div>
      </div>

      <IncomingApplication/>
    </div>
  )
}
