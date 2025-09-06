import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../../Data/Data";

const Testimonials=()=>{

    return(
        <div className='mt-20 pb-5'>
        <div className='text-4xl text-mine-shaft-100 mb-3 text-center font-semibold'>What <span className="text-bright-sun-400">user</span> says about us?</div>
       <div className="flex justify-evenly">
   {testimonials.map((item,index)=>
             <div key={index} className="flex flex-col gap-3 border border-bright-sun-400 rounded-xl p-3 mt-10 w-[23%]">
             <div className="flex gap-2 items-center">
                   <Avatar className="!h-14 !w-14" src="avatar-8.png" alt="it's me" />
                   <div >
                     <div className="text-xl text-mine-shaft-200 font-semibold">{item.name}</div>
                     <Rating value={item.rating} fractions={2} readOnly />
                   </div>
                   
             </div>
             <div className="text-sm text-mine-shaft-300">{item.testimonial}</div>
             </div>
     
        )}
</div>
</div>
    )
}
export default Testimonials;