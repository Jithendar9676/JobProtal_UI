import { ActionIcon, Button, Divider, TagsInput, Textarea } from "@mantine/core";
import { IconBriefcase, IconDeviceFloppy, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useState } from "react";

import SelectInput from "../PostJob/SelectInput";
import fields from "../Data/Profile";
import ExpInput from "./ExpInput";

const Profile =(props)=>{
    const select=fields
    const[edit,setEdit]=useState([false,false,false,false]);
    const[about,setAbout]=useState(props.about);
    const[skill,setSkill]=useState([]);
    const[addExp,setAddExp]=useState(false);
    const handleEdit=(index)=>{
       const newEdit=[...edit]
       newEdit[index]=!newEdit[index]
       setEdit(newEdit)
    }

    return(
<div className="w-2/3 mx-auto ">
<div className="relative" >
    <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
    <img className="w-48 h-48 rounded-full border-8  border-mine-shaft-950 -bottom-1/3 absolute left-3" src="/avatar-9.png" alt="" />
</div>
<div className="mt-16 px-3">
    <div className="text-3xl font-semibold flex justify-between">{props.name}  <ActionIcon onClick={()=>handleEdit(0)} size="lg" variant="subtle" color="brightSun.4">
     {edit[0] ? <IconDeviceFloppy className="w-4/5 h-4/5" />:<IconPencil className="w-4/5 h-4/5" />}
    </ActionIcon></div>
    {edit[0] ? <>
        <div className="flex gap-10 [&>*]:w-1/2">
                    <SelectInput {...select[0]}/>
                    <SelectInput {...select[1]}/>
                </div>
                <SelectInput {...select[2]}/>
    </>:
    <>
    
    <div className="text-xl flex gap-1 items-center text-mine-shaft-300"><IconBriefcase className="h-5 w-5" stroke={1.5}/>{props.role} &bull; {props.company} </div>
    <div className="flex items-center gap-1 text-lg text-mine-shaft-300"><IconMapPin className="w-5 h-5" stroke={1.5}/> {props.location} </div>
    </>
    }
    
</div>
     <Divider mx='sm' my='xl' />
     <div className="px-3"> 
        <div className="text-2xl font-semibold mb-3 flex justify-between">About
        <ActionIcon onClick={()=>handleEdit(1)} size="lg" variant="subtle" color="brightSun.4">
     {edit[1] ? <IconDeviceFloppy className="w-4/5 h-4/5" />:<IconPencil className="w-4/5 h-4/5" />}
    </ActionIcon>
        </div>
        {edit[1]? <>
            <Textarea placeholder="Enter about yourself..." autosize minRows={3} value={about}onChange={(event) => setAbout(event.currentTarget.value)}/>
        </>:<>
        <div className="text-sm text-mine-shaft-300 text-justify">
            {about}
        </div>
        </>}
        
     </div>
     <Divider  mx='sm'  my='xl' />
     <div className="px-3"> 
     <div className="text-2xl font-semibold mb-3 flex justify-between">Skills
     <ActionIcon onClick={()=>handleEdit(2)} size="lg" variant="subtle" color="brightSun.4">
     {edit[2] ? <IconDeviceFloppy className="w-4/5 h-4/5" />:<IconPencil className="w-4/5 h-4/5" />}
    </ActionIcon>
     </div>
     {edit[2]? <TagsInput value={skill} placeholder="Add Skills" splitChars={[',', ' ', '|']} onChange={setSkill}
    />:
    <div className="flex gap-3 flex-wrap">
        {props.skills.map((item,index)=> <div key={index} className="bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 font-medium text-sm px-3 py-1 rounded-3xl " >{item}</div> )}
     </div>
    }
     
     </div>
     <Divider  mx='sm'  my='xl' />
     <div className="px-3"> 
     <div className="text-2xl font-semibold mb-3 flex justify-between">Experience <div className="flex gap-2">
     <ActionIcon onClick={()=>setAddExp(true)} size="lg" variant="subtle" color="brightSun.4">
    <IconPlus className="w-4/5 h-4/5" />
    </ActionIcon>
     <ActionIcon onClick={()=>handleEdit(3)} size="lg" variant="subtle" color="brightSun.4">
     {edit[3] ? <IconDeviceFloppy className="w-4/5 h-4/5" />:<IconPencil className="w-4/5 h-4/5" />}
    </ActionIcon></div>
     </div>
    <div className="flex flex-col gap-8">
        {
            props.experience.map((item,index)=><ExpCard key={index} {...item} edit={edit[3]}/>)
        }
        {addExp&&<ExpInput add setEdit={setAddExp}/>}
    </div>
     
     </div>
     <Divider  mx='sm'  my='xl' />
     <div className="px-3"> 
     <div className="text-2xl font-semibold mb-3 flex justify-between">Certifications

     <ActionIcon onClick={()=>handleEdit(4)} size="lg" variant="subtle" color="brightSun.4">
     {edit[4] ? <IconDeviceFloppy className="w-4/5 h-4/5" />:<IconPencil className="w-4/5 h-4/5" />}
    </ActionIcon>
     </div>
     
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