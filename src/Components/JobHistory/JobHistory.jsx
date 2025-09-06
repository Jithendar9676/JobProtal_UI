import {  Tabs } from "@mantine/core";
import { jobList } from "../../Data/JobsData";
import Card from "./Card";

const JobHistory=()=>{
    return(
        <div className="pt-5">
            <div className="text-2xl font-semibold mb-5">Job History</div>
            <div>
            <Tabs variant="outline" radius="lg" defaultValue="applyed">
      <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:!text-bright-sun-400">
        <Tabs.Tab value="applyed">Applyed</Tabs.Tab>
        <Tabs.Tab value="saved">Saved</Tabs.Tab>
        <Tabs.Tab value="offered">Offered</Tabs.Tab>
        <Tabs.Tab value="interviewing">Interviewing</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="applyed">
      <div className="mt-10 flex flex-wrap gap-10 px-12 ">
        {
            jobList.map((item,index)=><Card key={index} {...item} applyed/>)
        }
    </div>
      </Tabs.Panel>
      <Tabs.Panel value="saved">
      <div className="mt-10 flex flex-wrap gap-10 px-12 ">
        {
            jobList.map((item,index)=><Card key={index} {...item}  saved/>)
        }
    </div>
      </Tabs.Panel>
      <Tabs.Panel value="offered">
      <div className="mt-10 flex flex-wrap gap-10 px-12 ">
        {
            jobList.map((item,index)=><Card key={index} {...item} offered/>)
        }
    </div>
      </Tabs.Panel>
      <Tabs.Panel value="interviewing">
      <div className="mt-10 flex flex-wrap gap-10 px-12 ">
        {
            jobList.map((item,index)=><Card key={index} {...item} interviewing/>)
        }
    </div>
      </Tabs.Panel>
    </Tabs>
            </div>
        </div>
    )
}
export default JobHistory;