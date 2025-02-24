import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";

const TalentProfilePage = () =>{
    return(
<div className="min-h-[100vh] bg-mine-shaft-950 font-['poppies'] p-4">
        <Divider  size="xs" />
        <Link className="my-2 inline-block" to="/find-talent">
                <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4"  variant="light" >Back</Button>
                </Link>
                <Divider  size="xs" />
                <Profile/>
    </div>
    );
}
export default TalentProfilePage;