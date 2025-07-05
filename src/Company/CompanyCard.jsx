import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const CompanyCard=(props)=>{
    return(
        <div className="flex justify-between items-center bg-mine-shaft-900 rounded-lg p-4">
        <div className="flex gap-2">
            <div className="p-2 bg-mine-shaft-800 rounded-md">
                <img className="w-7" src={`/Icons/${props.name}.png`} alt="" />
            </div>
            <div>
                <div className="font-semibold">{props.name}</div>
                <div className="text-sm text-mine-shaft-300">{props.employees} Employees</div>
            </div>
        </div>
        <div>
           <ActionIcon color="brightSun.4"  variant="subtle" >
            <IconExternalLink/>
          </ActionIcon>
          </div>
    </div>
    )
}

export default CompanyCard;