import { Avatar, Button, Divider, Tabs } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import AboutCompany from "./AboutCompany";
import CompanyJobs from "./CompanyJobs";
import CompanyEmp from "./CompanyEmp";

const Company = () => {
    return (
        <div className="w-3/4">
            <div className="relative" >
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="w-30 h-30 rounded-t-2xl border-8 bg-mine-shaft-950  border-mine-shaft-950 -bottom-1/4 absolute left-5" src="/Icons/Google.png" alt="" />
            </div>
            <div className="mt-12  px-3">
                <div className="text-3xl font-semibold flex justify-between mx-10" >Google  <Avatar.Group>
                    <Avatar src="avatar-7.png" />
                    <Avatar src="avatar-8.png" />
                    <Avatar src="avatar-9.png" />
                    <Avatar>+10k</Avatar>
                </Avatar.Group>
                </div>
                <div className="flex items-center gap-1 text-lg text-mine-shaft-300"><IconMapPin className="w-5 h-5" stroke={1.5} /> New York , United States </div>
            </div>
            <Divider my='xl' />
            <div>
            <Tabs variant="outline" radius="lg" defaultValue="about">
      <Tabs.List className="[&_button]:!text-lg font-semibold [&_button[data-active='true']]:!text-bright-sun-400">
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
        <Tabs.Tab value="employees">Employees</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about"><AboutCompany/></Tabs.Panel>
      <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
      <Tabs.Panel value="employees"><CompanyEmp/></Tabs.Panel>
    </Tabs>
            </div>
        </div>
    )
}

export default Company;