import { Divider, Text } from "@mantine/core";
import { IconBookmark, IconClockHour3, } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const JobCard=(props)=>{
    return(
        <Link to="/jobs" className=" p-4 bg-mine-shaft-900 w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className="w-7" src={`/Icons/${props.company}.png`} alt="" />
                    </div>
                    <div >
                        <div className="font-semibold">{props.jobTitle}</div>
                        <div className="text-sm text-mine-shaft-300">{props.company} &#x2022; {props.applicants} Applicants</div>
                    </div>
                </div>
                <IconBookmark className="text-mine-shaft-300 cursor-pointer"/>
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-sm">
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            <Text className="!text-sm text-justify !text-mine-shaft-300 cursor-pointer" lineClamp={3}>
                {props.description}
    </Text>
        <Divider  size="xs" color="mineShaft.7" />
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200" >
                    &#8377;{props.package}
                </div>
                <div className="flex gap-1 items-center text-sm text-mine-shaft-400">
                    <IconClockHour3 className="w-5 h-5" stroke={1.5} /> {props.postedDaysAgo} days ago
                </div>
            </div>
        </Link>
    )
}

export default JobCard;