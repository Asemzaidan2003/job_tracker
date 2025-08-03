import { useState , useEffect } from "react";
import BlurButton from "./BlurButton"
import { CgMoreO } from "react-icons/cg";
import OptionsList from "./OptionsList";
import TableRow from "./TableRow";
import {API_URL} from "../config"

const Table = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(()=> {
        const fetchCompanies = async ()=>{
            const res = await fetch(`${API_URL}/company`);
            const data = await res.json();
            setCompanies(data);
        }
        fetchCompanies();
    },[])

    const statusList = [
        { value: "Not Applied" },
        { value: "Applied" },
        { value: "Interview" },
        { value: "Rejected" },
        { value: "Offer" },
        { value: "No Response" }];

const colorByStatusList = {
    "Not Applied": "primary",
    "Applied": "warning",
    "Interview": "info",
    "Rejected": "error",
    "Offer": "success",
    "No Response": "error"
}
function getColorByStatus(status) {
    return colorByStatusList[status] || "primary";
}
const handleStatusChange = async (companyId, newStatus) => {
  try {
    const res = await fetch(`${API_URL}/company/${companyId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    if (!res.ok) throw new Error("Error updating status");

    setCompanies(prevCompanies =>
      prevCompanies.map(company =>
        company._id === companyId ? { ...company, status: newStatus } : company
      )
    );
  } catch (err) {
    console.error("Error updating status:", err.message);
    alert("Error Updating the Status , Error in console");
  }
};



  return (
    <div className="w-full overflow-x-auto">
        <table className="min-w-full text-center">
        <thead>
            <tr className="border-b-4 border-border">
            <th className="px-2 sm:px-6 py-3 text-xs font-medium text-text-primary uppercase tracking-wider whitespace-nowrap">
                Company name
            </th>
            <th className="px-2 sm:px-6 py-3 text-xs font-medium text-text-primary uppercase tracking-wider whitespace-nowrap hidden md:table-cell">
                company E-mail
            </th>
            <th className="px-2 sm:px-6 py-3 text-xs font-medium text-text-primary uppercase tracking-wider whitespace-nowrap hidden lg:table-cell">
                Company phone number
            </th>
            <th className="px-2 sm:px-6 py-3 text-xs font-medium text-text-primary uppercase tracking-wider whitespace-nowrap">
                Status
            </th>
            <th className="px-2 sm:px-6 py-3 text-xs font-medium text-text-primary uppercase tracking-wider whitespace-nowrap">
                Other details
            </th>
            </tr>
        </thead>
        <tbody>
            {companies.map(company => {
            const statusColor = getColorByStatus(company.status);
            return (
                <TableRow
                key={company._id}
                companyName={company.company_name}
                companyEmail={company.company_email}
                companyPhone={company.company_phone_number}
                companyOtherDetails={company}
                component={
                    <BlurButton
                    text={
                        <OptionsList
                        list={statusList}
                        applicationValue={company.status}
                        iconColor={statusColor}
                        text_color={statusColor}
                        onChange={(newStatus) => handleStatusChange(company._id, newStatus)}
                        />
                    }
                    borderColor={statusColor}
                    blurColor={statusColor}
                    iconRight={true}
                    />
                }
                icon={
                    <CgMoreO className="text-text-secondary w-full h-8 cursor-pointer hover:text-text-primary transition-colors" />
                }
                />
            );
            })}
        </tbody>
        </table>
    </div>
    );
}

export default Table