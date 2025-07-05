import { Badge, Tabs } from "@mantine/core";
import Jobs from "../Find-Jobs/Jobs";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../Find-Talent/TalentCard";

const PostedJobDesc = () => {
    return (
        <div className="mt-5 w-3/4">
            <div className="text-2xl font-semibold flex items-center">Software Engineer <Badge variant="light" ml="sm" size="xs" color="brightSun.4">Badge</Badge> </div>
            <div className="font-medium text-mine-shaft-300 mb-5">New York, USA</div>
            <div>
                <Tabs variant="outline" radius="lg" defaultValue="overview">
                    <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:!text-bright-sun-400">
                        <Tabs.Tab value="overview">Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel className="[&>div]:w-full" value="overview"><JobDesc edit /></Tabs.Panel>
                    <Tabs.Panel value="applicants"> <div className="mt-10 flex flex-wrap gap-5 justify-around">

                        {talents.map((item, index) => index < 6 && <TalentCard key={index} {...item} posted />)}


                    </div></Tabs.Panel>
                    <Tabs.Panel value="invited">
                        <div className="mt-10 flex flex-wrap gap-5 justify-around">

                            {talents.map((item, index) => index < 6 && <TalentCard key={index} {...item} invited />)}


                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </div>
    )
}
export default PostedJobDesc;