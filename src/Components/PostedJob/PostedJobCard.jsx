const PostedJobCard =(props)=>{
    return(
        <div className="bg-mine-shaft-900 border-l-4 border-l-bright-sun-400 p-2 rounded-xl">
            <div className="text-sm  font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-mine-shaft-300 font-medium">{props.location}</div>
            <div className="text-xs text-mine-shaft-300">{props.posted}</div>
        </div>
    )
}

export default PostedJobCard;