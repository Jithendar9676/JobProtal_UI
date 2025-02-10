import { Divider } from "@mantine/core";
import SearchBar from "../Find-Talent/SearchBar";

const FindTalent=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppies']">
        <Divider  size="xs" mx='md' />
        <SearchBar/>
        <Divider  size="xs" mx='md' />
        
    </div>
    )
}

export default FindTalent;