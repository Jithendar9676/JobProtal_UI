import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                <div className=" text-7xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
                    Find your <span >dream </span>
                    <span>job </span> with us
                </div>
                <div className="text-2xl text-mine-shaft-200">
                    Good life begins with a good company. Start explore  thousands of jobs in one place.
                </div>
                <div className="flex gap-3 mt-5">
                    <TextInput className="text-lg text-mine-shaft-100 bg-mine-shaft-900 p-2 rounded-lg [&_input]:!text-mine-shaft-100" variant="unstyled"
                        label="Job Tittle"
                        placeholder="Software Engineer"
                    />
                    <TextInput className="text-lg text-mine-shaft-100 bg-mine-shaft-900 p-2 rounded-lg [&_input]:!text-mine-shaft-100" variant="unstyled"
                        label="Job Type"
                        placeholder="Full Time"
                    />
                    <div className="flex h-full w-20 items-center justify-center text-mine-shaft-400 bg-bright-sun-300 rounded-xl p-3 hover:bg-bright-sun-500  cursor-pointer">
                        <IconSearch className="h-[100%] w-[100%]" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center w-[55%]">
                <div className="w-[33rem] relative">
                    <img src="proj-mgt.png" alt="" />
                    <div className="absolute top-[55%] backdrop-blur-md border-bright-sun-400 border rounded-lg -right-10 p-2 w-fit">
                        <div className="text-mine-shaft-100 text-center mb-1 text-sm">10k+ got job</div>
                        <Avatar.Group>
                            <Avatar src="avatar-7.png" />
                            <Avatar src="avatar-8.png" />
                            <Avatar src="avatar-9.png" />
                            <Avatar>+9K</Avatar>
                        </Avatar.Group>
                    </div>
                    <div className="absolute top-[28%] backdrop-blur-md border-bright-sun-400 border rounded-lg  p-2 w-fit flex -left-10 gap-3 flex-col"> 
                        <div className="flex gap-2 items-center">
                            <div className="w-10 h-10 p-1 bg-mine-shaft-900  rounded-lg">
                                <img src="Google.png" alt="" />
                            </div>
                            <div className="text-lg text-mine-shaft-100">
                                <div >Software Engineer</div>
                                <div className="text-sm text-mine-shaft-200">New York</div>
                            </div>

                        </div>
                        <div className="flex gap-2 justify-around text-mine-shaft-200 text-sm" >
                            <span>1 day go </span><span>120 applicants</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DreamJob;