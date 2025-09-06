import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile =(props)=>{
    return(
<div className="w-2/3 ">
<div className="relative" >
    <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
    <img className="w-48 h-48 rounded-full border-8  border-mine-shaft-950 -bottom-1/3 absolute left-3" src="/avatar-9.png" alt="" />
</div>
<div className="mt-16 px-3">
    <div className="text-3xl font-semibold flex justify-between">{props.name} <Button color="brightSun.4" variant="light">Message</Button></div>
    <div className="text-xl flex gap-1 items-center text-mine-shaft-300"><IconBriefcase className="h-5 w-5" stroke={1.5}/>{props.role} &bull; {props.company} </div>
    <div className="flex items-center gap-1 text-lg text-mine-shaft-300"><IconMapPin className="w-5 h-5" stroke={1.5}/> {props.location} </div>
</div>
     <Divider mx='sm' my='xl' />
     <div className="px-3"> 
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
            {props.about}
        </div>
     </div>
     <Divider  mx='sm'  my='xl' />
     <div className="px-3"> 
     <div className="text-2xl font-semibold mb-3">Skills</div>
     <div className="flex gap-3 flex-wrap">
        {props.skills.map((item,index)=> <div key={index} className="bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 font-medium text-sm px-3 py-1 rounded-3xl " >{item}</div> )}
     </div>
     </div>
     <Divider  mx='sm'  my='xl' />
     <div className="px-3"> 
     <div className="text-2xl font-semibold mb-3">Experience</div>
    <div className="flex flex-col gap-8">
        {
            props.experience.map((item,index)=><ExpCard key={index} {...item}/>)
        }
    </div>
     
     </div>
     <Divider  mx='sm'  my='xl' />
     <div className="px-3"> 
     <div className="text-2xl font-semibold mb-3">Certifications</div>
     <div className="flex flex-col gap-8">
        {
            props.certifications.map((item,index)=><CertiCard key={index} {...item}/>)
        }
    </div>
     </div>
</div>
    )
}

export default Profile;