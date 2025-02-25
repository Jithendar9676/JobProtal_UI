import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

const Profile =()=>{
    return(
<div className="w-2/3 ">
<div className="relative" >
    <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
    <img className="w-48 h-48 rounded-full border-8  border-mine-shaft-950 -bottom-1/3 absolute left-3" src="/avatar-9.png" alt="" />
</div>
<div className="mt-16 px-3">
    <div className="text-3xl font-semibold flex justify-between">Jarrod wood <Button color="brightSun.4" variant="light">Message</Button></div>
    <div className="text-xl flex gap-1 items-center text-mine-shaft-300"><IconBriefcase className="h-5 w-5" stroke={1.5}/>Software Engineer &bull; Google </div>
    <div className="flex items-center gap-1 text-lg text-mine-shaft-300"><IconMapPin className="w-5 h-5" stroke={1.5}/> New york , UAS </div>
</div>
     <Divider mx='sm' my='xl' />
     <div className="px-3"> 
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic dolore repellat nobis impedit velit sunt. Veniam excepturi tempora ad sint, assumenda ex nobis, consectetur voluptatem doloremque omnis temporibus aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vero necessitatibus eveniet, est officiis velit itaque eligendi ad labore aut cupiditate! Omnis repellendus deleniti nemo?
        </div>
     </div>
     <Divider  mx='sm'  my='xl' />
     <div className="px-3"> 
     <div className="text-2xl font-semibold mb-3">Skills</div>
     <div className="flex gap-3 flex-wrap">
     <div className="bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 font-medium text-sm px-3 py-1 rounded-3xl " >React</div>
     <div className="bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 font-medium text-sm px-3 py-1 rounded-3xl " >Spring Boot</div>
     <div className="bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 font-medium text-sm px-3 py-1 rounded-3xl " >My Sql</div>
     </div>
     </div>
     <Divider  mx='sm'  my='xl' />
     <div className="px-3"> 
     <div className="text-2xl font-semibold mb-3">Experience</div>
     </div>
</div>
    )
}

export default Profile;