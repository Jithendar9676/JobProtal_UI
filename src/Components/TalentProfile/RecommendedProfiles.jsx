import { talents } from "../../Data/TalentData";
import TalentCard from "../Find-Talent/TalentCard";

const RecommendedProfile=()=>{
    return(
        <div>
<div className="text-xl font-semibold mb-5">Recommended Talent</div>
 <div className="flex flex-col flex-wrap gap-5 px-5">
    {talents.map((item,index)=>index<4 &&<TalentCard key={index} {...item} />)}
 </div>
</div>
    )
}

export default RecommendedProfile;