
import { talents } from "../../Data/TalentData";
import Sort from "../Find-Jobs/Sort";
import TalentCard from "./TalentCard";

const Talents=()=>{
    return(
<div className="p-5">
    <div className="flex justify-between">
     <div className="text-3xl font-semibold">Talents</div>
     <div>
        <Sort/>
     </div>
   
    </div>
    <div className="mt-10 flex flex-wrap gap-10 justify-evenly">
  {talents.map((item,index)=><TalentCard key={index} {...item}/>)}
        
    </div>

</div>
    )
}

export default Talents;