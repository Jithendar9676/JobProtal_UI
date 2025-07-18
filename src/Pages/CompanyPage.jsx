import { Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Company from "../Company/Company";
import SimilarCompanies from "../Company/SimilarCompanies";

const CompanyPage = () => {

    const navigate = useNavigate()

    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppies'] p-4">
            <Button onClick={()=>navigate(-1)} className="my-5" leftSection={<IconArrowLeft size={20} />} color="brightSun.4" variant="light" >Back</Button>
          <div className="flex gap-5 justify-between">
          <Company/>
          <SimilarCompanies/>
          </div>
        </div>
    )
}

export default CompanyPage;