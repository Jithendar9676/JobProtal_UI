import { ActionIcon } from "@mantine/core"
import { IconTrash } from "@tabler/icons-react"

const CertiCard = (props) => {
    return(
        <div className="flex justify-between">
                <div className="flex gap-2">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="w-7" src={`/Icons/${props.issuer}.png`} alt="" />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-semibold">{props.name}</div>
                        <div className="text-sm text-mine-shaft-300">{props.issuer}</div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex flex-col items-end">
                    <div  className="text-sm text-mine-shaft-300">Issued {props.issueDate}</div>
                    <div  className="text-sm text-mine-shaft-300">Id: {props.certificateId}</div>
                 </div>
                 {props.edit&&<ActionIcon  size="lg" variant="subtle" color="red.8">
                  <IconTrash stroke={1.5} className="w-4/5 h-4/5" />
                  </ActionIcon>}
                </div>
                
            </div>
    )
}
export default CertiCard