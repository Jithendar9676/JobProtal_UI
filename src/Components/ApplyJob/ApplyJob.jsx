import { Button, Divider, FileInput, LoadingOverlay, Notification, NumberInput, rem, Textarea, TextInput } from "@mantine/core"
import { IconCheck, IconPaperclip } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ApplyJob=()=>{
    const navigate=useNavigate();
    const[preview,setPreview]=useState(false);
    const[Submit,setSubmit]=useState(false)
    const[sec,setSec]=useState(5)
    const handlePreview=()=>{
       setPreview(!preview)
       window.scrollTo({top:0,behavior:"smooth"})
    }

    const handleSubmit=()=>{
        setSubmit(!Submit)
        let x=5
        setInterval(()=>{
            x--;
            setSec(x)
            if(x==0) navigate("/find-jobs")
        },1000)
    }
return(
    <>
    <div className="w-2/3 mx-auto">
    <LoadingOverlay className="!fixed"
          visible={Submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'brightSun.4', type: 'bars' }}
        />
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
     
</div>
<Divider my="xl"/>
     <div className="text-xl font-semibold mb-5">
        Submit Your Application
     </div>
     <div className="flex flex-col gap-5">
     <div className="flex gap-10 [&>*]:w-1/2">
     <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview}?"text-mine-shaft-300 font-semibold":""`} label="Full Name" withAsterisk placeholder="Enter Name"/>
     <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview}?"text-mine-shaft-300 font-semibold":""`} label="Email" withAsterisk placeholder="Enter Email"/> 
     </div>
     <div className="flex gap-10 [&>*]:w-1/2">
     <NumberInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview}?"text-mine-shaft-300 font-semibold":""`} label="Phone Number" withAsterisk placeholder="Enter  Phone Number" hideControls clampBehavior="strict"
      min={0}
      max={9999999999}/>
     <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview}?"text-mine-shaft-300 font-semibold":""`} label="Personal Website" withAsterisk placeholder="Enter URL"/> 
     </div>
     <FileInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview}?"text-mine-shaft-300 font-semibold":""`} withAsterisk
        leftSection={<IconPaperclip stroke={1.5}/>}
        label="Attach your CV"
        placeholder="Your CV"
        leftSectionPointerEvents="none"
      />
           <Textarea readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview}?"text-mine-shaft-300 font-semibold":""`} withAsterisk
        placeholder="Type something about yourself..."
        label="Cover Letter"
        autosize
        minRows={4}
      />
        {!preview&& <Button onClick={handlePreview} color="brightSun.4"  variant="light" >Preview</Button>}
        <div className="flex [&>*]:w-1/2 gap-5">
        {preview&& <Button fullWidth onClick={handlePreview} color="brightSun.4"  variant="outline" >Edit</Button>}
        {preview&& <Button fullWidth onClick={handleSubmit} color="brightSun.4"  variant="light" >Submit</Button>}
        </div>
 </div>
    </div>
    <Notification  className={`!border-bright-sun-400 !fixed top-0 left-[35%] z-[1001] transition duration-300 ease-in-out ${Submit?"translate-y-0":"-translate-y-20"} `} icon={<IconCheck style={{width:rem(20), height:rem(20)}}/> } color="teal" title="Application Submited!" mt="md" withCloseButton={false}>
        Redirecting to Find Jobs in {sec} seconds...
      </Notification>
    </>
)
}
export default ApplyJob