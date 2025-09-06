import { IconBriefcase } from "@tabler/icons-react";
import SignUp from "../Components/SignUpLogIn/SignUp";
import LogIn from "../Components/SignUpLogIn/LogIn";
import { useLocation } from "react-router-dom";

const SignUpPage=()=>{
    const location=useLocation()
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppies'] overflow-hidden">
        <div className={`w-[100vw] h-[100Vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-1000 ${location.pathname=='/signup'?"-translate-x-1/2":"translate-x-0"} `}>
            <LogIn/>
           <div className={`w-1/2 h-full bg-mine-shaft-900 transition-all ease-in-out duration-1000  ${location.pathname=='/signup'?"rounded-r-[200px] ":"rounded-l-[200px] "} flex flex-col items-center justify-center gap-4`}>
           <div className='flex gap-2 items-center text-bright-sun-400' >
            <IconBriefcase className='h-16 w-16' stroke={2} />
            <div className='text-6xl font-semibold' >Jobs Adda</div>
         </div>
         <div className="text-mine-shaft-200 text-2xl font-semibold">Find your dream Job</div>
           </div>
           <SignUp/>
        </div>
          </div>
    )
}
export default SignUpPage;