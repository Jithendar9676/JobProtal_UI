import { Link, useLocation } from "react-router-dom";

const NavLinks=()=>{
   const links=[{name :"Find Jobs" ,url:"/find-jobs"},
      {name :"Find Talent" ,url:"/find-talent"},
      {name :"Post Job" ,url:"/post-jobs"},
      {name :"Posted Job" ,url:"/posted-job"},
      {name :"Job History" ,url:"/job-history"}
   ]
   const location=useLocation()
   return(
    <div className='flex gap-5 text-mine-shaft-300 h-full items-center'>
   {links.map((item ,index)=>
   <div className={` ${location.pathname == item.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"} 
   border-t-[3px] h-full flex items-center text-[18px]`}>
   <Link key={index} to={item.url}>{item.name}</Link>
   </div>
   )}
 </div>
   ) 
}
export default NavLinks;