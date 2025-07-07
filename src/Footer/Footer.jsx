import { IconBrandFacebook, IconBrandInstagram, IconBrandX, IconBriefcase } from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";
import { useLocation } from "react-router-dom";

const Footer=()=>{
    const location=useLocation();
    return(
        location.pathname!="/signup" && location.pathname!="/login" ? <div className="pt-20 pb-5 flex gap-5 justify-around  bg-mine-shaft-950 font-['poppies']">
            <div className="w-1/4 flex flex-col gap-4 mx-4">
            <div className='flex gap-2 items-center text-bright-sun-400' >
            <IconBriefcase className='h-7 w-7' stroke={2} />
            <div className='text-3xl font-semibold' >Jobs Adda</div>
         </div>

         <div className="text-mine-shaft-300 text-sm">Job protal with user profiles ,skills updates, cartification, work experience and admin job postings. </div>
            <div className="flex gap-4 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700">
                <div><IconBrandFacebook/></div>
                <div><IconBrandInstagram/></div>
                <div><IconBrandX/></div>
            </div>
            </div>
            {
                footerLinks.map((item,index)=>
                <div key={index} >
                     <div className="text-bright-sun-400 font-semibold mb-4 text-lg">{item.title}</div>
                     {
                        item.links.map((data,index)=><div className="text-mine-shaft-300 mb-1  cursor-pointer hover:text-bright-sun-300 hover:translate-x-2 transition duration-300 ease-in-out">
                            {data}
                        </div>)
                     }

                </div>)
            }
        </div>:<></>

        )
}

export default Footer;