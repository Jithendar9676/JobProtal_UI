import { companyData } from "../../Data/Company";


const AboutCompany=()=>{

    return(
        <div className="flex flex-col gap-4">
{
    Object.keys(companyData).map((key,index)=>key!='Name'&&
        <div key={index}>
            <div className="text-xl font-semibold mb-4">{key}</div>
          {key!='Website' && <div className="text-sm text-mine-shaft-300 text-justify">{key!='Specialties'?companyData[key]:companyData[key].map((item,index)=><span key={index} className="mr-2">   &bull;  {item}</span>)}</div>}
          {key=='Website' && <a href={companyData[key]} target="_blank"  className="text-sm text-bright-sun-400 text-justify">{companyData[key]}</a>}
        </div>
    )
}

        </div>

    )
}
export default AboutCompany;