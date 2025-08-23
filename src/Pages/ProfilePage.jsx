import { Divider } from "@mantine/core";
import Profile from "../Profile/Profile";
import { profile } from "../Data/TalentData";



const ProfilePage=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppies']">
        <Divider  size="xs" mx='md' />
          <Profile {...profile} />
        
    </div>
    )
}

export default ProfilePage;