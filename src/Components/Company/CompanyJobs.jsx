import { jobList } from "../../Data/JobsData"
import JobCard from "../Find-Jobs/JobCard"

const CompanyJobs=()=>{
    return(
        <div>

<div className="mt-10 flex flex-wrap gap-10">
        {
            jobList.map((item,index)=>index<6&&<JobCard key={index} {...item}/>)
        }
    </div>
        </div>
    )
}

export default CompanyJobs