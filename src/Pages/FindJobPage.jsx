import { Divider } from "@mantine/core"
import SearchBar from "../Find-Jobs/SearchBar"
import Jobs from "../Find-Jobs/Jobs"

const FindJobPage=()=>{
return(
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppies']">
        <Divider  size="xs" mx='md' />
        <SearchBar/>
        <Divider  size="xs" mx='md' />
        <Jobs/>
    </div>
)
}
export default FindJobPage