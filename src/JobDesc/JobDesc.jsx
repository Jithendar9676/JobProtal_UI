import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconAdjustments, IconBookmark, IconMapPin } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
const JobDesc=()=>{
    const data=desc
    return(
<div className="w-2/3">

     <div className="flex justify-between">
                <div className="flex gap-3">
                    <div className="p-3 bg-mine-shaft-800 rounded-lg">
                        <img className="w-14" src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div >
                        <div className="font-semibold text-2xl">Software Enginer III</div>
                        <div className="text-lg text-mine-shaft-300">Google &#x2022; 3 days ago &#x2022; 48 aplicants</div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Link to="/apply-job">
                    <Button color="brightSun.4" size="sm" variant="light">Apply</Button>
                    </Link>
                    <IconBookmark className="text-bright-sun-400 cursor-pointer"/>
                </div>
          
            </div>
            <Divider my="xl"/>
                <div className="flex justify-between">
                    {card.map((item,index)=>
                    <div key={index} className="flex flex-col items-center">
                    <ActionIcon color="brightSun.4" className="!h-14 !w-14" variant="light" radius="xl" aria-label="Settings">
      <item.icon className="w-3/4 h-3/4" stroke={1.5} />
    </ActionIcon>
    <div className="text-sm text-mine-shaft-300">{item.name}</div>
    <div className="font-semibold ">{item.value}</div>
                    </div>
                   
                    )}

                </div>
                <Divider my="xl"/>
                <div>
                    <div className="text-xl font-semibold mb-5">Requried Skils</div>
                    <div className="flex flex-wrap gap-2">
                        {
                            skills.map((item,index)=>
                                <ActionIcon key={index} color="brightSun.4" p="xs" className="!h-fit !w-fit !text-sm" variant="light" radius="xl" aria-label="Settings">
                                {item}
                            </ActionIcon>
                        )
                   }
                    </div>
                </div>
                <Divider my="xl"/>
                <div>
                    <div className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_h4]:text-mine-shaft-200  [&_*]:text-mine-shaft-300 [&_p]:text-justify
                    [&_li]:marker:text-bright-sun-400 [&_li]:mb-1"  dangerouslySetInnerHTML={{__html:data}}>
                    </div>
                </div>
                <Divider my="xl"/>
                <div>
                    <div className="text-xl font-semibold mb-5">About Company</div>
                    <div className="flex justify-between mb-5">
                <div className="flex gap-3">
                    <div className="p-3 bg-mine-shaft-800 rounded-lg">
                        <img className="w-7" src={`/Icons/Google.png`} alt="" />
                    </div>
                    <div >
                        <div className="font-medium text-2xl">Google</div>
                        <div className="text-sm text-mine-shaft-300">10K employees</div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <Link to="">
                    <Button color="brightSun.4" variant="light">Company Page</Button>
                    </Link>
                </div>
          
            </div>
            <div className="text-mine-shaft-300 text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum repellendus molestias ex animi ea debitis labore et, itaque placeat odio officiis at dignissimos totam tempora adipisci corporis sunt distinctio.
            Voluptatibus facilis architecto ipsum temporibus, aperiam maxime quis labore nam saepe impedit magni aut quos mollitia nisi provident rerum, vel vitae recusandae natus fugit? Placeat quae soluta facere deserunt aut.
            Accusamus, at amet harum optio unde omnis ipsum nobis aperiam, veritatis, nulla beatae tempore nisi deserunt quas ducimus. Illum unde ratione quod vel repellendus! Delectus repellendus excepturi pariatur adipisci? Deserunt?
            Delectus ullam laboriosam voluptate, autem nostrum iusto?</div>
                </div>
</div>
    )
}
export default JobDesc;