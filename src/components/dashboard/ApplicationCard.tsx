import { ArrowRight } from "lucide-react";

type Applicant = {
    name: string;
    image: string;
    experience: string;
    latestExperience: string;
    latestExperienceLogo: string;
    latestExperienceTime: string;
}
interface ApplicantProps {
    applicant: Applicant;
}
export default function ApplicationCard({applicant} : ApplicantProps) {
  return (
    <div className="border border-border/30 rounded-lg p-3">
        <div className='flex gap-2 items-center'>
            {applicant.image && <img src={applicant.image} alt={applicant.name} className="object-cover w-12 h-12" />}
            <div>
                <p className="text-lg font-medium">{applicant.name}</p>
                <p className="text-gray-700">{applicant.experience} in Software Development</p>
            </div>
        </div>

        <p className="font-medium text-lg pt-3">Latest Experience</p>
        <div className="flex gap-2 items-center">
            {applicant.latestExperience && <img src={applicant.latestExperienceLogo} alt={applicant.latestExperience}  className="object-cover w-8 h-8"  />}
            <div>
                <p className="text-gray-700">{applicant.latestExperience}</p>
                <p className="text-sm text-gray-500">{applicant.latestExperienceTime}</p>
            </div>
        </div>

        <button className='w-full flex justify-between items-center mt-2 pt-2 border-t border-border/30 text-[#21729F]'>
          <p className="font-medium">View Resume</p>
          <ArrowRight/>
        </button>
    </div>
  )
}
