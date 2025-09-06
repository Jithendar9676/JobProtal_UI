import { Divider } from "@mantine/core";

import { profile } from "../Data/TalentData";
import Profile from "../Components/Profile/Profile";



const ProfilePage=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppies']">
        <Divider  size="xs" mx='md' />
          <Profile {...profile} />
        
    </div>
    )
}

export default ProfilePage;