import { talents } from "../Data/TalentData";
import TalentCard from "../Find-Talent/TalentCard";

const CompanyEmp=()=>{
    return(
        <div>

        <div className="mt-10 flex flex-wrap gap-10">
                
                    {talents.map((item,index)=>index<6&&<TalentCard key={index} {...item}/>)}
                
            </div>
                </div>
    )
}

export default CompanyEmp;