import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../Components/TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendedProfile from "../Components/TalentProfile/RecommendedProfiles";

const TalentProfilePage = () =>{
    return(
<div className="min-h-[100vh] bg-mine-shaft-950 font-['poppies'] p-4">
        <Link className="my-2 inline-block" to="/find-talent">
                <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4"  variant="light" >Back</Button>
                </Link>
                <div className="flex gap-5">
                <Profile  {...profile}/>
                <RecommendedProfile/>
                </div>
    </div>
    );
}
export default TalentProfilePage;