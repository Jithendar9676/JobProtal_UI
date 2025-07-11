import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ApplyJob from "../ApplyJob/ApplyJob";


const ApplyJobPage=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppies']">
<Link className="my-2 inline-block" to="/jobs">
                <Button  leftSection={<IconArrowLeft size={20}/>} color="brightSun.4"  variant="light" >Back</Button>
                </Link>
                <div className="">
                      <ApplyJob/>   
                </div>
        </div>
    )
}
export default ApplyJobPage;