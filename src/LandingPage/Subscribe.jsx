import { Button, TextInput } from "@mantine/core";

const Subscribe=()=>{

    return(
        <div className='mt-20 flex items-center mx-28 py-4 bg-mine-shaft-900 rounded-xl justify-evenly' >
        <div className='text-4xl W-2/5 text-mine-shaft-100  text-center font-semibold'>Never Wants to Miss Any <span className="text-bright-sun-400">Job News?</span></div>
   <div className="flex gap-4 bg-mine-shaft-700 items-center rounded-xl px-3 py-2">
   <TextInput
       variant="unstyled"
       className="[&_input]:text-mine-shaft-100 font-semibold"
      placeholder="Your@email.com"
      size="xl"
    />
    <Button className="!rounded-lg" size="lg" color="brightSun.4" variant="filled">Subscribe</Button>
   </div>
   
   </div>
    )

}
export default Subscribe;