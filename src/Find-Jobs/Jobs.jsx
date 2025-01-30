import { jobList } from "../Data/JobsData";
import JobCard from "./JobCard";
import Sort from "./Sort";

const Jobs=()=>{
    return(
<div className="p-5">
    <div className="flex justify-between">
     <div className="text-3xl font-semibold">Recommended Jobs</div>
     <div>
        <Sort/>
     </div>
   
    </div>
    <div className="mt-10 flex flex-wrap gap-10 px-12 ">
        {
            jobList.map((item,index)=><JobCard key={index} {...item}/>)
        }
    </div>

</div>
    )
}

export default Jobs;