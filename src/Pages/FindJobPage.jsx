import { Divider } from "@mantine/core"
import SearchBar from "../Find-Jobs/SearchBar"

const FindJobPage=()=>{
return(
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppies']">
        <Divider  size="xs" mx='md' />
        <SearchBar/>
    </div>
)
}
export default FindJobPage