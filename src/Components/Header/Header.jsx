import { Avatar, Indicator } from '@mantine/core';
import { IconBell, IconBriefcase, IconSettings } from '@tabler/icons-react';
import React from 'react'
import NavLinks from './NavLinks';
import { useLocation } from 'react-router-dom';
import ProfileMenu from './ProfileMenu';

const Header = () => {
   const location=useLocation();
   return (
     location.pathname!="/signup" && location.pathname!="/login" ? <div className="w-full bg-mine-shaft-950 text-white h-20  flex justify-between items-center px-6 font-['poppies']">
         <div className='flex gap-2 items-center text-bright-sun-400' >
            <IconBriefcase className='h-9 w-9' stroke={2} />
            <div className='text-3xl font-semibold' >Jobs Adda</div>
         </div>
        {/* <NavLinks/> */}
        {NavLinks()}
         <div className='flex gap-3 items-center'>
           <ProfileMenu/>
           
            <div className='bg-mine-shaft-900 p-2 rounded-full'>
               <IconSettings stroke={1.5} />
            </div>

            <div className='bg-mine-shaft-900 p-2 rounded-full'>
               <Indicator color='brightSun.4' size={8} offset={6} processing>
                  <IconBell stroke={1.5} />
               </Indicator>
            </div>
         </div>
      </div>:<></>
   )

}

export default Header;