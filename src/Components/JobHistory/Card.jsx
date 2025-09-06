import { Button, Divider, Text } from "@mantine/core";
import { IconBookmark, IconBookmarkFilled, IconCalendarMonth, IconClockHour3, } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Card=(props)=>{
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
               {props.saved ? <IconBookmarkFilled className="text-bright-sun-300 cursor-pointer"/>: <IconBookmark className="text-mine-shaft-300 cursor-pointer"/>}
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
                    <IconClockHour3 className="w-5 h-5" stroke={1.5} /> {(props.applyed || props.interviewing) ?"Applyed":"Posted"} {props.postedDaysAgo} days ago
                </div>
            </div>
            {
                (props.offered || props.interviewing )&& <Divider  size="xs" color="mineShaft.7" />
            }
            {
                props.offered&&
                                        <div className="flex gap-4">
                                            <Button color="brightSun.4" variant="light" fullWidth>Accept</Button>
                                            <Button color="brightSun.4" variant="outline" fullWidth>Reject</Button>
                                        </div>
            }
            {
                props.interviewing && <div className="flex items-center gap-2 [&>span]:text-mine-shaft-400 text-sm"> 
                    <IconCalendarMonth className="w-5 h-5 text-bright-sun-400" stroke={1.5}/> Sun, 25 July &bull; <span>10:00 AM</span>
                </div>
            }
        </Link>
    )
}

export default Card;