import { Button } from "@mantine/core"
import { useState } from "react"
import ExpInput from "./ExpInput"

 const ExpCard =(props)=>{
    const [edit,setEdit]=useState(false)
    return(<>        {!edit?<div className="flex flex-col gap-3">
             <div className="flex justify-between">
                <div className="flex gap-2">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="w-7" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold">{props.title}</div>
                        <div className="text-sm text-mine-shaft-300">{props.company} &#x2022; {props.location}</div>
                    </div>
                </div>
                 <div className="text-sm text-mine-shaft-300">
                  {props.startDate} - {props.endDate}
                 </div>
            </div>
            <div className="text-sm  text-mine-shaft-300 text-justify">
               {
                props.description
               }
            </div>

          {props.edit&&  <div className="flex gap-5">
            <Button  onClick={()=>{setEdit(true)}} color="brightSun.4"  variant="light" >Edit</Button>
            <Button  onClick={()=>{}} color="red.4"  variant="outline" >Delete</Button>
            </div>
 }

        </div>:<ExpInput setEdit={setEdit}/>}
        </>

    )
 }
 export default ExpCard