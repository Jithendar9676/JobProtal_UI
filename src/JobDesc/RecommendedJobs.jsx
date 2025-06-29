import { jobList } from "../Data/JobsData";
import JobCard from "../Find-Jobs/JobCard";
import Sort from "../Find-Jobs/Sort";

const RecommendedJobs=()=>{
    return(
        <div >
             <div className="text-xl font-semibold mb-3">Recommended Jobs</div>
    
            <div className=" flex flex-col flex-wrap gap-5 justify-between">
          {jobList.map((item,index)=>index<6&&<JobCard key={index} {...item}/>)}
                
            </div>
        
        </div>
            )
}
export default RecommendedJobs;