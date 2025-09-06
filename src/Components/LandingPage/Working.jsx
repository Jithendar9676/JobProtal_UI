import { Avatar } from "@mantine/core";
import { work } from "../../Data/Data";

const Working = () => {
    return (
        <div className='mt-20 pb-5'>
            <div className='text-4xl text-mine-shaft-100 mb-3 text-center font-semibold'>How it <span className="text-bright-sun-400">Works</span></div>
            <div className="text-2xl mx-auto mb-10 text-center text-mine-shaft-300 w-1/2">
                Effortlessly navigate through the process and land your dream job.
            </div>

            <div className="flex px-16 justify-around items-center">
                <div className="relative">
                    <img className="w-[30rem]" src="/Working/Girl.png" alt="Girl" />
                    <div className="flex flex-col border absolute right-0 top-[15%] border-bright-sun-400 rounded-xl items-center px-1 py-3 w-36 gap-0.5 backdrop-blur-md">
                        <Avatar className="!h-16 !w-16" src="avatar-7.png" alt="it's me" />

                        <div className="font-semibold text-2xs text-center text-mine-shaft-200">
                            complete your profile
                        </div>
                        <div className="text-sm text-mine-shaft-300"> 70% completed</div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {
                        work.map((item, index) => <div key={index} className="flex items-center gap-4">
                            <div className="bg-bright-sun-300 rounded-full p-2.5">
                                <img className="h-12 w-12" src={`/Working/${item.name}.png`} alt={item.name} />
                            </div>
                            <div>
                                <div className="text-mine-shaft-200 text-xl font-semibold">{item.name}</div>
                                <div className="text-mine-shaft-300">{item.desc}</div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}
export default Working;
